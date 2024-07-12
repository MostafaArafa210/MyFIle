#!/bin/bash
set -e
detect_os() {
	_OS=$(uname)
	case "$_OS" in
	GNU/Linux|Linux)
		echo "Detected Linux OS..."
		export TRICKEST_OS="linux"
		;;
	Darwin)
		echo "Detected MacOS..."
		export TRICKEST_OS="darwin"
		;;
	*)
		echo "Unsupported OS '${_OS}'. Please contact us at Discord for support: https://trickest.com/community/"
		exit 1
		;;
	esac
}

detect_distro() {
	if [[ "${TRICKEST_OS}" == "linux" ]]; then
		if [ -f /etc/os-release ]; then
			export TRICKEST_DISTRO=$(awk -F= '/^ID=/{print tolower($2)}' /etc/os-release | tr -d '"')
		else
			echo "Could not detect '/etc/os-release'. Please contact us at Discord for support: https://trickest.com/community/"
			exit 1
		fi
	elif [[ "${TRICKEST_OS}" == "darwin" ]]; then
		export TRICKEST_DISTRO="darwin"
	fi
}

set_data_dir() {
	if [[ "${TRICKEST_OS}" == "linux" ]]; then
		export TRICKEST_DATA_DIR="/data"
	elif [[ "${TRICKEST_OS}" == "darwin" ]]; then
		export TRICKEST_DATA_DIR="${HOME}/trickest"
	else
		echo "Unsupported OS '${TRICKEST_OS}'. Please contact us at Discord for support: https://trickest.com/community/"
		exit 1
	fi

	echo "Data directory set to: ${TRICKEST_DATA_DIR}..."
	read -r -p "Do you wish to change the data directory? [y/N] : " choice
	case "$choice" in
	[yY][eE][sS] | [yY])
		read -r -p "Enter the new data directory path: " TRICKEST_DATA_DIR
		;;
	*)
		echo "Proceeding with the default data directory..."
		;;
	esac
}

detect_agent_service() {
	if [[ "${TRICKEST_OS}" == "linux" ]]; then
		AGENT_SERVICE_STATUS=$(
			sudo systemctl status trickest-agent >/dev/null 2>&1
			echo $?
		)
		case "$AGENT_SERVICE_STATUS" in
		4)
			echo "Service not detected, proceeding..."
			;;
		3)
			echo "Service already stopped, proceeding..."
			;;
		0)
			echo "Service already running..."
			read -r -p "Stop the service now, and proceed with update? [y/N] : " choice
			case "$choice" in
			[yY][eE][sS] | [yY])
				echo "Stopping service..."
				sudo systemctl stop trickest-agent
				;;
			*)
				exit "Aborting initialization"
				;;
			esac
			;;
		*)
			echo "Service is in non running, nor stopped state, assuming not working..."
			;;
		esac
	elif [[ "${TRICKEST_OS}" == "darwin" ]]; then
		echo "MacOS does not support service management, make sure that your service is stopped and then continue..."
		read -r -p "Proceed with initialization? [Y/n] : " choice
		case "$choice" in
		[nN][oO] | [nN])
			exit "Aborting initialization"
			;;
		*)
			echo "Proceeding..."
			;;
		esac
	fi
}

check_docker() {
	if which docker 2>&1 >/dev/null; then
		echo "Docker found..."
	else
		echo "Docker not found..."
		if [[ "${TRICKEST_OS}" == "darwin" ]]; then
			echo "Automatic install not supported on MacOS. Refer to https://docs.docker.com/docker-for-mac/install/ for installation instructions."
			exit "Aborting initialization"
		fi
		read -r -p "Do you wish to attempt automatic installation of the Docker? (needs sudo privilege!) [y/N] : " choice
		case "$choice" in
		[yY][eE][sS] | [yY])
			install_docker
			;;
		*)
			echo "Refer to https://docs.docker.com/engine/install/ for installation instructions."
			exit "Aborting initialization"
			;;
		esac
	fi
}

install_docker() {
	curl -fsSL https://get.docker.com -o get-docker.sh
	sh ./get-docker.sh
	rm ./get-docker.sh
}

ensure_data_dir_structure() {
	if [ -d ${TRICKEST_DATA_DIR} ]; then
		echo "Directory intended for trickest data usage already exists at ${TRICKEST_DATA_DIR}"
		read -r -p "Do you wish to proceed? [y/N] : " choice
		case "$choice" in
		[yY][eE][sS] | [yY])
			echo "Proceeding..."
			clear_cache
			;;
		*)
			exit "Aborting initialization"
			;;
		esac
	else
		if [[ ! -d "${TRICKEST_DATA_DIR}" ]]; then
			echo "Data directory does not exist. Creating..."
			mkdir -p "${TRICKEST_DATA_DIR}"
		fi
	fi
}

clear_cache() {
	echo "Clearing cache..."
	if [ -f "${TRICKEST_DATA_DIR}/agent.crt" ]; then
		rm -f "${TRICKEST_DATA_DIR}/agent.crt"
	fi
	if [ -f "${TRICKEST_DATA_DIR}/agent.key" ]; then
		rm -f "${TRICKEST_DATA_DIR}/agent.key"
	fi
	if [ -f "${TRICKEST_DATA_DIR}/ca.crt" ]; then
		rm -f "${TRICKEST_DATA_DIR}/ca.crt"
	fi
}

download_trickest_agent() {
  case $(processor_architecture) in
    x86_64)
      echo "Downloading latest Trickest agent for x86_64..."
      agent_url="https://trickest-agent-binary.s3.eu-central-1.amazonaws.com/latest/${TRICKEST_OS}/amd64/twe-agent"
      ;;
    aarch64|arm64)
      echo "Downloading latest Trickest agent for arm64..."
      echo "Please note that arm64 tools are not officially supported yet..."
      agent_url="https://trickest-agent-binary.s3.eu-central-1.amazonaws.com/latest/${TRICKEST_OS}/arm64/twe-agent"
      ;;
    *)
      echo "Unsupported architecture '$(processor_architecture)'. Please contact us at Discord for support: https://trickest.com/community/"
      ;;
  esac

	agent_path="${TRICKEST_DATA_DIR}/trickest-agent"
  if ! curl -s -o "$agent_path" "$agent_url"; then
		echo "Failed to download Trickest agent."
		exit 1
	fi
	chmod +x "$agent_path"
}

processor_architecture() {
  if [[ $(which arch 2>&1 >/dev/null; echo $?) == 0 ]]; then
    arch
  else
    uname -m
  fi
}

ensure_auth_env_variables() {
	if [[ -z "$TRICKEST_CLIENT_AUTH_ID" ]]; then
		echo "TRICKEST_CLIENT_AUTH_ID is not set. Go to https://trickest.io/dashboard/settings/fleet and click on "Add Machine" to generate new TRICKEST_CLIENT_AUTH_ID for your machine"
		exit 1
	fi

	if [[ -z "$TRICKEST_CLIENT_AUTH_SECRET" ]]; then
		echo "TRICKEST_CLIENT_AUTH_SECRET is not set. Go to https://trickest.io/dashboard/settings/fleet and click on "Add Machine"to generate new TRICKEST_CLIENT_AUTH_SECRET for your machine"
		exit 1
	fi
}

create_systemd_service() {
	service_file="/etc/systemd/system/trickest-agent.service"
	log_file="/data/trickest-agent.log"

	if ! touch "$service_file"; then
		echo "Failed to create systemd service file."
		exit 1
	fi

	if ! touch "$log_file"; then
		echo "Failed to create log file."
		exit 1
	fi

	cat <<EOF >"$service_file"
[Unit]
Description=Trickest Workflow Engine - Agent
After=network-online.target
Wants=docker.service
StartLimitBurst=25
StartLimitIntervalSec=100

[Service]
User=root
Type=simple
ExecStart=/bin/bash -c '${TRICKEST_DATA_DIR}/trickest-agent -c ${TRICKEST_DATA_DIR}/conf.yaml run'
Restart=always
RestartSec=15

[Install]
WantedBy=multi-user.target
EOF
	echo "Systemd service file created at: $service_file"
	echo "Reloading systemd daemon..."
	sudo systemctl daemon-reload
}

generate_config_file() {
	echo "Generating config file..."
	ensure_auth_env_variables
	config_file="${TRICKEST_DATA_DIR}/conf.yaml"

	if ! touch "$config_file"; then
		echo "Failed to create config file."
		exit 1
	fi

	cat <<EOF >"$config_file"
log:
  file: ${TRICKEST_DATA_DIR}/trickest-agent.log
node:
  endpoint: "https://api.trickest.io/node"
client:
  auth:
    id: "${TRICKEST_CLIENT_AUTH_ID}"
    secret: "${TRICKEST_CLIENT_AUTH_SECRET}"
    endpoint: "https://api.trickest.io/oauth2/token"
agent:
  dataDir: "${TRICKEST_DATA_DIR}"
EOF
}

start_and_verify_service() {
  echo "Starting Trickest agent service..."
  sudo systemctl daemon-reload
  set -e
	sudo systemctl start trickest-agent.service
	set +e
	sleep 5
	let try=0
	echo "Waiting for Trickest agent service..."
	while true; do
      if [ $(systemctl show -p SubState trickest-agent.service | cut -d'=' -f2) == "running" ]; then
          echo "Trickest agent service started successfully."
          break
      fi
      let try+=1
      if [ $try -gt 15 ]; then
        echo "Trickest agent service failed to start. Please start it manually using the following command:"
        echo "/data/trickest-agent -c /data/conf.yaml run"
        echo "Please send the output of the manual start command to support@trickest.com for further assistance."
        exit
      fi
      sleep 2
  done
}


detect_os
detect_distro
set_data_dir
detect_agent_service
check_docker
ensure_data_dir_structure
download_trickest_agent

if [[ "${TRICKEST_OS}" == "linux" ]]; then
	create_systemd_service
fi

generate_config_file
if [[ "${TRICKEST_OS}" == "linux" ]]; then
	start_and_verify_service
elif [[ "${TRICKEST_OS}" == "darwin" ]]; then
	echo "Please start the agent manually using the following command:"
	echo "${TRICKEST_DATA_DIR}/trickest-agent -c ${TRICKEST_DATA_DIR}/conf.yaml run"
fi
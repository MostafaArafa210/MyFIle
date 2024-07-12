var pe = {
					login: "/auth/login",
					verify: "/auth/verify",
					logout: "/auth/logout",
					forgot_password: "/auth/forgot-password",
					login_auth: "/auth/login-auth",
					mfa_login_check: "/auth/mfa-login-check",
					mfa_login_auth: "/auth/mfa-login-auth",
					verify_auth: "/auth/verify-auth",
					forgot_password_auth: "/auth/forgot-password-auth",
					create_system_admin: "/auth/create-system-admin",
					create_system_admin_auth: "/auth/create-system-admin-auth",
					verify_system_admin_invite: "/auth/verify-system-admin-invite",
					verify_system_admin_invite_auth: "/auth/verify-system-admin-invite-auth"
				},clients/token /hub/graphql  
"sendInvitation": ""

var Query/capig/graphql/  = {
		query HomeViewQuery($tenantId: ID!, $pixelIds: [String!], $timeWindow: Int) {
  		tenantQueries(tenantId: $tenantId) {
    	eventMetrics(pixelIds: $pixelIds, timeWindowMin: $timeWindow) {
      activity {
        name
        receivedCount
        publishedCount
        lastUpdated
      }
      incoming {
        eventNamesCount
        eventsCount
      }
      outgoing {
        eventNamesCount
        eventsCount
        publishSuccessRate
      }
    }
  }
}};
var DeleteAccount/hub/graphql/   = {
	    mutation DeleteTenant($tenantId: String!) {
      tenantMutations {
        deleteTenant(tenantId: $tenantId)
      }
    };}
var Update Account/hub/graphql/   = {
	    mutation TenantEditNameModalMutation(
  $input: UpdateTenantInput!
) {
  tenantMutations {
    updateTenant(input: $input) {
        tenant {
            id
            name
            status
            canPartnerManage
            users {
                id
                email
                roles {
                    name
                    displayName
                }
                tenants {
                    id
                    name
                    status
                    canPartnerManage
                    availableRoles {
                        name
                        displayName
                    }
                }
                isSelf
                canBeDeleted
                defaultTenantId
            }
            availableRoles {
                name
                displayName
            }
            tenantUsage {
                totalActivePixels
                totalInactivePixels
                totalPixels
                tenantUsageByTraffic {
                   totalEventsReceived
                   totalPixelsWithTraffic
                   publishError
                   durationInHours,
                   lastUpdatedAt
               }
            }
            canEditTenantSettingsInUI
            canViewTenantInUI
            canEditTenantSettingsInUI
        }
    }
  }
}}
var GetAccount = hub/graphql {
	query TenantAccountUsersViewQuery(
  $tenantId: String!
) {
  tenant(tenantId: $tenantId)  {
        id
        name
        status
        canPartnerManage
        users {
            id
            email
            roles {
                name
                displayName
            }
            tenants {
                id
                name
                status
                canPartnerManage
                availableRoles {
                    name
                    displayName
                }
            }
            isSelf
            canBeDeleted
            defaultTenantId
        }
        availableRoles {
            name
            displayName
        }
        tenantUsage {
            totalActivePixels
            totalInactivePixels
            totalPixels
            tenantUsageByTraffic {
               totalEventsReceived
               totalPixelsWithTraffic
               publishError
               durationInHours,
               lastUpdatedAt
            }
        }
        canEditTenantSettingsInUI
        canViewTenantInUI
        canEditTenantSettingsInUI
    }
},________________________________________________________________________________________________    
tenantId: String!
}
var accountUsge/hub/graphql/  = {
	query TenantUsageQuery(
  	$tenantId: String!) 
  	{
    tenantUsage(tenantId: $tenantId) {
        totalActivePixels
        totalInactivePixels
        totalPixels
        tenantUsageByTraffic {
           totalEventsReceived
           totalPixelsWithTraffic
           publishError
           durationInHours,
           lastUpdatedAt
       }
    }
}}

var Add_User_With_Role = hub/graphql/ {
	mutation useAddUserAccountMutation(
  $addUserWithRoleInput: AddUserWithRoleInput!
) {
  userMutations {
    addUserWithRole(input: $addUserWithRoleInput) {
      userAlreadyExist
      invitationLink
      user {
        id
        email
        status
        roles {
          name
          displayName
        }
        isSelf
        canBeDeleted
        defaultTenantId
      }
    }
  }
},________________________________________________________________________________________________________    
input AddUserWithRoleInput {
    email: String!
    roleName: String!
}};

var Change_User_Roles = hub/graphql/{
	mutation UserAccessChangeMutation(
  $changeRoleForUserInput: ChangeRoleForUserInput!
) {
  userMutations {
    changeRoleForUser(input: $changeRoleForUserInput) {
      user {
        id
        email
        status
        roles {
          name
          displayName
        }
        isSelf
        canBeDeleted
        defaultTenantId
      }
    }
 }},
input ChangeRoleForUserInput {
    userId: String!
    roleToRevoke: String
    roleToAdd: String
}};

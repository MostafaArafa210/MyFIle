#############################################
# Python 3
#############################################

import base64, email.utils, hmac, json, hashlib

def signpython(method, host, path, params, sid, skey):
    """
    Return HTTP Basic Authentication ("Authorization" and "FT-Date") headers.
    method: Request method string
    host: Request host string (without port and without the "https://" prefix)
    path: Request path (includes query params)
    params: Dict of request body parameters
    sid: Service ID
    skey: Auth API key
    """

    params = json.dumps(params) if bool(params) else ''

    now = email.utils.formatdate()
    values = [now, method.upper(), host.lower(), path, params]
    data = '\n'.join(values) + '\n'

    sig = hmac.new(skey.encode(), data.encode(), hashlib.sha256)
    auth = '%s:%s' % (sid, sig.hexdigest())

    return {'FT-Date': now, 'Authorization': 'Basic %s' % base64.b64encode(auth.encode()).decode()}

import base64

# String to be encoded
plain_text = "admin : CanTestMeAuthIfNeedThis@#!"
# Convert the string to bytes
plain_bytes = plain_text.encode('utf-8')
# Encode the bytes to Base64
encoded_bytes = base64.b64encode(plain_bytes)
# Convert the Base64 bytes back to a string
encoded_str = encoded_bytes.decode('utf-8')

"""
var y = new XMLHttpRequest();
if (e.auth) {
            var b = e.auth.username || "",
            x = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
            m.Authorization = "Basic " + btoa(b + ":" + x);
            }
            var w = s(e.baseURL, e.url);
"""

print(encoded_str)  # Output: "SGVsbG8sIFdvcmxkIQ=="
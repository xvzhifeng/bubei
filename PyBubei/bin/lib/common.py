import re
class ConfigError(Exception):
    def __init__(self, err):
        Exception.__init__(self, err)

class ConfigContentError(ConfigError):
    def __init__(self, file_name, num, value):
        self.file_name = file_name
        self.line = num
        self.value = value
        err = "Configration file:{0} error,in line:{1},content:{2}".format(
            file_name, num, value)
        ConfigError.__init__(self, err)

class FormatError(Exception):
    def __init__(self, value, expectation):
        self.value = value
        self.expectation = expectation
        err = "Value:{0},expect:{1}".format(value, expectation)
        Exception.__init__(self, err)

def check_half(uchar):
    inside_code=ord(uchar)
    if inside_code>0x0021 and inside_code<0x7e:
        return True
    else:
        return False


def check_half_arr(items):
    for item in items:
        if not check_half(item):
            return False
    return True

def check_number(value):
    if not check_half(value):
        print("wordBookID must number")

def check_int(value, key):
    ret = re.match(r"^(-?[1-9]\d*|0)$", value)
    if ret is None:
        raise FormatError(value,key + " must number")
    print(ret)
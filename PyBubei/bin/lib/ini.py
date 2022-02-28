# conf 文件的基础配置类

class FormatError(Exception):
    def __init__(self, value, expectation):
        self.value = value
        self.expectation = expectation
        err = "Value:{0},expect:{1}".format(value, expectation)
        Exception.__init__(self, err)


class ConfigError(Exception):
    def __init__(self, err):
        Exception.__init__(self, err)


class ConfigLoadError(ConfigError):
    def __init__(self, file_name, err_code, reason):
        self.file_name = file_name
        self.errno = err_code
        self.reason = reason
        err = "Load file:{0},{1}".format(file_name, reason)
        ConfigError.__init__(self, err)


class ConfigContentError(ConfigError):
    def __init__(self, file_name, num, value):
        self.file_name = file_name
        self.line = num
        self.value = value
        err = "Configration file:{0} error,in line:{1},content:{2}".format(
            file_name, num, value)
        ConfigError.__init__(self, err)


class ConfigMissError(ConfigError):
    def __init__(self, file_name, item_name):
        self.file_name = file_name
        self.item_name = item_name
        err = "Configuration file:{0},miss:{1}".format(file_name, item_name)
        ConfigError.__init__(self, err)


class ConfigFormatError(ConfigError):
    def __init__(self, file_name, item_name, value, expectation):
        self.file_name = file_name
        self.item_name = item_name
        self.value = value
        self.expectation = expectation
        err = "Configuration file:{0},item:{1} is {2},but expect:{3}".format(
            file_name, item_name, value, expectation)
        ConfigError.__init__(self, err)


class ConfigEmptyError(ConfigError):
    def __init__(self, file_name):
        self.file_name = file_name
        err = "unable to load any valid settings from {0}".format(file_name)
        ConfigError.__init__(self, err)


class ConfCheck(object):
    def __init__(self):
        self.check_list = []

    def add_regulation(self, name, is_required, check_func, *args):
        self.check_list.append((name, is_required, check_func) + args)


# Base class of all configuration


class ConfBase(object):
    def __init__(self, check_reg):
        self._check_reg = check_reg
        self.cfg = {}
        self.file_name = ""

    # def __init__(self):
    #     self._check_reg = []
    #     self.cfg = {}
    #     self.file_name = ""

    def load(self, path):
        self.file_name = path
        try:
            with open(path, "r") as fp:
                line_no = 0
                for line in fp:
                    line_no = line_no + 1
                    content = line
                    pos = content.find("#")
                    if -1 != pos:
                        content = content[:pos]
                    content = content.strip()
                    if 0 == len(content):
                        continue
                    items = content.split("=", 1)
                    if 2 != len(items):
                        raise ConfigContentError(path, line_no, line)
                    self.cfg[items[0].strip()] = items[1].strip()
        except IOError as e:
            print("读取配置文件错误！！！")
        self._check()
        self.set_value()

    def set_value(self):
        pass

    def _check(self):
        if 0 == len(self.cfg):
            print(self.file_name)
        for checkReg in self._check_reg.check_list:
            if checkReg[0] not in self.cfg:
                if not checkReg[1]:
                    continue
                else:
                    print(checkReg[1])
            value = self.cfg[checkReg[0]]
            try:
                checkReg[2](value, *checkReg[3:])
            except FormatError as e:
                raise ConfigFormatError(
                    self.file_name, checkReg[0], value, e.expectation)

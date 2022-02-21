# 获取单词

## 1. 环境配置

```cmd
# 安装selenium
pip install selenium
# 安装 webdriver-manager
pip install webdriver-manager -i https://mirrors.aliyun.com/pypi/simple/  --trusted-host mirrors.aliyun.com
```

其中的`-i https://mirrors.aliyun.com/pypi/simple/` 指定镜像

如果安装时出现`SSL错误` 即可加上`--trusted-host mirrors.aliyun.com`

或者：

```shell
pip install -r requirements.txt
```

## 2. 运行

```python
python3 getWordsMeans.py
```

## *. 问题记录

## 1. 运行时出现 下列错误（SSL）

问题现象：
`[52320:18108:0221/123852.263:ERROR:ssl_client_socket_impl.cc(995)] handshake failed; returned -1, SSL error code 1, net_error -100`

解决方法(暂未解决)：

参考方法：

```python
 def initDriver(self):
        chrome_options = webdriver.ChromeOptions()
        chrome_options.add_argument('--ignore-certificate-errors')
        return webdriver.Chrome(service=Service(
            ChromeDriverManager(chrome_type=ChromeType.CHROMIUM).install()),options=chrome_options)
```

#!/bin/sh
PROCESS_NAME="bubei"
PROCESS_PATH=/data/bin/lib
JAR_FILE="${PROCESS_PATH}/${PROCESS_NAME}.jar"
LOG_FILE="/data/log"
CONF_HOME=/data/conf
CONF_FILES="-Dbubei_path=${CONF_HOME}/bubei.ini"
VM_OPTS=""
HOST_NAME="${HOSTNAME}"
TRAN_DATE=`date +%Y%m%d%H%M%S`

function start() {
    nohup $JAVA_HOME/bin/java $VM_OPTS $CONF_FILES -classpath $CONF_HOME:$JAR_FILE \
        org.springframework.boot.loader.JarLauncher >>$LOG_FILE 2>&1 &
    return $?
}

function stop() {
    ps -ef | grep $JAR_FILE | grep -v grep | awk '{print $2}'|xargs kill -15
    return $?
}

function kill() {
    ps -ef | grep $JAR_FILE | grep -v grep | awk '{print $2}'|xargs kill -9
    return $?
}

function status() {
    pid=`ps -ef | grep $JAR_FILE | grep -v grep | awk '{print $2}'`
    if [ -n "$pid" ]; then
        echo "${PROCESS_NAME} service is running (pid $pid)."
        return 1
    else
        echo "${PROCESS_NAME} service is not running."
        return 0
    fi
}

declare -i RETRY_COUNT
RETRY_COUNT=0

if [ $# -ne 1 ] && [ $# -ne 2 ]; then
    echo "操作类型: [start|stop|restart|kill|status] [操作参数]"
    exit 1
fi
start_parameter=$2
if [ "$1" = "start" ]; then
    echo "---start---"
    start
    if [ $? -ne 0 ]; then
        echo "---fail to start---"
    fi
elif [ "$1" = "restart" ]; then
    echo "---check---"
    status
    if [ $? -eq 1 ]; then
        echo "---stop---"
        stop
    fi
    while [ "$RETRY_COUNT" -lt "$RETRY_MAX_NUM" ]; do
        sleep 2
        echo "---check---"
        status
        if [ $? -eq 0 ]; then
            echo "---start---"
            start
            sleep 2
            echo "---check---"
            status
            exit 0
        fi
        let RETRY_COUNT++
    done
    echo "---fail to restart---"
elif [ "$1" = "stop" ]; then
    echo "---check---"
    status
    if [ $? -eq 1 ]; then
        echo "---stop---"
        stop
    fi
    sleep 2
    echo "---check---"
    status
elif [ "$1" = "kill" ]; then
    echo "---check---"
    status
    if [ $? -eq 1 ]; then
        echo "---stop---"
        kill
    fi
    sleep 2
    echo "---check---"
    status
elif [ "$1" = "status" ]; then
    echo "---check---"
    status
else
    echo "操作类型: [start|stop|restart|kill|status] [操作参数]"
    exit 1
fi

exit $?
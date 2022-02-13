#!/bin/sh

RED='\033[0;31m'
BLUE='\033[0;32m'
NC='\033[0m'
BOLD=$(tput bold)
NORM=$(tput sgr0)

BASE_DIR=/data/bubei
DEPLOY_DIR=/data/bin
PROJECT_DIR=afterEnd/bubei

rm -rf ${BASE_DIR}
git clone git@gitee.com:sumuxzf/bubei.git -b mx ${BASE_DIR}
if [ $? -ne 0]; then
    echo -e "fail to get bubei source"
    exit 1
fi

cd ${BASE_DIR}/${PROJECT_DIR}
# -pl 指定项目
mvn clean package -pl bubei -am -Dmaven.test.skip=true
if [ $? -ne 0]; then
    echo -e "fail to build bubei source"
    exit 1
fi

\cp bubei/target/bubei.jar /data/bin/lib/
\cp bubei/bin/*.sh /data/bin/

echo -e "${BLUE}${BOLD}bubei deploy completed.${NC}${NORM}"
exit 0

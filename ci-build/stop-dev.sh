
echo
echo ===========================================================
echo Stopping containers and network
echo ===========================================================
echo

docker stop app-dev

docker rm app-dev

docker network rm app-dev.network

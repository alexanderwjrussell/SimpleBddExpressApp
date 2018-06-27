error() {

  echo
  echo ===========================================================
  echo Printing logs from APP container
  echo ===========================================================
  echo

  docker logs app

  echo
  echo ===========================================================
  echo End of logs from APP container
  echo ===========================================================
  echo

  echo ">>>>>> Test Failures Found, exiting test run <<<<<<<<<"

  exit 1
}
cleanup() {
  echo "....Cleaning up"

  docker stop app

  docker rm app

  docker network rm energy.enquiry-submitter.network

  # remove untagged images (these are left behind when docker run fails)
  if [ $(docker images | grep '^<none>' | wc -c) -gt 0 ]; then
    docker images | grep "^<none>" | tr -s " " " " | cut -f3 -d" " | ifne xargs docker rmi
  fi
  echo ""
  echo "....Cleaning up done"
}
trap error ERR
trap cleanup EXIT

ifne () {
        read line || return 1
        (echo "$line"; cat) | eval "$@"
}

echo
echo ===========================================================
echo Building containers
echo ===========================================================
echo

docker -v

docker build -t app ./app
docker build -t appp.test ./tests

echo
echo ===========================================================
echo Spinning up test environment
echo ===========================================================
echo

docker network create -d bridge app.network

docker run -d --net=app.network --name app app
sleep 1

echo
echo ===========================================================
echo Running outside-in tests
echo ===========================================================
echo

docker run --net=app.network --rm --name tests app.test cucumberjs

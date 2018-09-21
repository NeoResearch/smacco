echo "performing git pull"
git pull

echo "updating submodule smacco"
git submodule update --init
(cd public/js/common/smacco && git pull origin master)  #git submodule update  --recursive

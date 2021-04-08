This is the main readme for any workflows since I cannot comment in them directly.

# Main deploy to production
On any push to the main branch, the script will first **Check out Repo** using `actions/checkout@v2` .
Then **Install DigitalOcean Controller** using `digitalocean/action-doctl@v2` with a `secrets.DIGITALOCEAN_ACCESS_TOKEN`.
The next step is to **Set up Docker Builder** using. `docker/setup-buildx-action@v1`./
**Authentication with Digital ocean** is next. A `Doctl` login is setup. Once loged in to the registry, we push
the build to our digital ocean registry. *NOTE: Our registry is spelt "petal-patch-regitstry".*

## Deploy to api
Using `appleboy/ssh-action@master`, with the host `secrets.DO_API1_HOST`, private key `secrets.DO_API_KEY`, and private key pass
phrase `secrets.DO_KEY_PASSPHRASE` we run an SSH script on the server directly. *Note: the key is the one formatted as
-----BEGIN RSA PRIVATE KEY-----, and -----END RSA PRIVATE KEY-----*. First we login to `doctl`, pull from the digital
ocean registry, stop and remove the old docker container. Then making sure we are using the options in the docker script
`-d, --restart always, -p 0.0.0.0:80:4000, and --name`. *NOTE: The -d is very important, otherwise the script will just keep
posting code 200 health checks to the cli without ever exiting.*
help:	## List all make commands
	@awk 'BEGIN {FS = ":.*##"; printf "\n  Please use `make <target>` where <target> is one of:\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) }' $(MAKEFILE_LIST)
	@echo ' '

clean:	## Clear build files
	rm -rf dist/

up:	## Up container to use
	docker compose up -d

stop:   ## Stop container
	docker stop 11ty_dev

watch:	## Runs a lite-server with examples accessible in http://localhost:3000
	docker exec -it 11ty_dev sh -c "yarn watch & yarn run serve & wait -n"

eslint: ## Run eslint
	docker exec 11ty_dev sh -c "yarn run eslint"

prettier: ## Run prettier
	docker exec 11ty_dev sh -c "yarn run prettier"

interact: ## Get access to /bin/sh interactive mode
	docker exec -it 11ty_dev /bin/sh

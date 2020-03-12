.PHONY: help prod deploy

help:			## Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/:[ a-zA-Z-]*[a-zA-Z]/: /' | sed -e 's/\\$$//' | sed -e 's/##//'

prod:			## Run ng build --prod to update dist/
	@ng build --prod

deploy: prod		## Run firebase deply (after updating dist/)
	@firebase deploy
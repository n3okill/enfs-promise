REPORTER = spec
MOCHA_OPTS = --ui tdd --ignore-leaks --recursive --require should


test-all: export REPORTER=dot
test-all: test test-enfspatch-promise test-enfsmkdirp-promise test-enfsfind-promise test-enfslist-promise test-enfsensure-promise test-enfscopy-promise test-enfsmove-promise test-enfscompare-promise

test:
	@echo Starting test *********************************************************
	@node ./node_modules/mocha/bin/mocha \
	--reporter $(REPORTER) \
	$(MOCHA_OPTS) \
	test/empty.js
	@echo Ending test

test-enfspatch-promise:
	@echo Testing enfspatch-promise
	@node ./node_modules/mocha/bin/mocha \
	--reporter $(REPORTER) \
	$(MOCHA_OPTS) \
	node_modules/enfspatch-promise/test/*.js
	@echo Ending test enfspatch-promise

test-enfsmkdirp-promise:
	@echo Testing enfsmkdirp-promise
	@node ./node_modules/mocha/bin/mocha \
	--reporter $(REPORTER) \
	$(MOCHA_OPTS) \
	node_modules/enfsmkdirp-promise/test/*.js
	@echo Ending test enfsmkdirp-promise

test-enfsfind-promise:
	@echo Testing enfsfind-promise
	@node ./node_modules/mocha/bin/mocha \
	--reporter $(REPORTER) \
	$(MOCHA_OPTS) \
	node_modules/enfsfind-promise/test/*.js
	@echo Ending test enfsfind-promise

test-enfslist-promise:
	@echo Testing enfslist-promise
	@node ./node_modules/mocha/bin/mocha \
	--reporter $(REPORTER) \
	$(MOCHA_OPTS) \
	node_modules/enfslist-promise/test/*.js
	@echo Ending test enfslist-promise

test-enfsensure-promise:
	@echo Testing enfsensure-promise
	@node ./node_modules/mocha/bin/mocha \
	--reporter $(REPORTER) \
	$(MOCHA_OPTS) \
	node_modules/enfsensure-promise/test/*.js
	@echo Ending test enfsensure-promise

test-enfscopy-promise:
	@echo Testing enfscopy-promise
	@node ./node_modules/mocha/bin/mocha \
	--reporter $(REPORTER) \
	$(MOCHA_OPTS) \
	node_modules/enfscopy-promise/test/*.js
	@echo Ending test enfscopy-promise

test-enfsmove-promise:
	@echo Testing enfsmove-promise
	@node ./node_modules/mocha/bin/mocha \
	--reporter $(REPORTER) \
	$(MOCHA_OPTS) \
	node_modules/enfsmove-promise/test/*.js
	@echo Ending test enfsmove-promise

test-enfscompare-promise:
	@echo Testing enfscompare-promise
	@node ./node_modules/mocha/bin/mocha \
	--reporter $(REPORTER) \
	$(MOCHA_OPTS) \
	node_modules/enfscompare-promise/test/*.js
	@echo Ending test enfscompare-promise

.PHONY: test test-all test-enfspatch-promise test-enfsmkdirp-promise test-enfsfind-promise test-enfslist-promise test-enfsensure-promise test-enfscopy-promise test-enfsmove-promise test-enfscompare-promise

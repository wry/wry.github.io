ASSETS = blog/pages.json
.PHONY: all clean
all: $(ASSETS)
blog/pages.json:
	scripts/genpages.pl > blog/pages.json
clean: $(ASSETS)
	$(RM) $^
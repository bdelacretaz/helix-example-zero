# Helix Example Zero

Build [![CircleCI](https://circleci.com/gh/bdelacretaz/helix-example-zero.svg?style=svg)](https://circleci.com/gh/bdelacretaz/helix-example-zero)

This is "Example Zero", your starting point to [Helix](https://www.project-helix.io/). 

> So far this is more a skeleton than a complete example, it needs to be fleshed out but already
> demonstrates the idea of standalone examples including integration tests that validate them
> along with the whole publishing chain. Discussion at [#27](https://github.com/adobe/helix-home/issues/27).

It demonstrates a basic website with a few pages, a header and a footer,
all in Markdown format, along with a simple custom CSS stylesheet and a few images.

By default, this example Helix website is published at https://helix-example-zero-bdelacretaz.project-helix.page/ . If you forked this repository, replace `bdelacretaz` with your GitHub username in that URL.

To access other Helix examples use [This GitHub query](https://github.com/topics/helix-example) - each example is found in its own GitHub repository.

For more info on Helix see https://www.project-helix.io/

_TODO: complete this example so it fits the below description_

 _TODO: refine the GitHub query, in a specific org only?_

## Files that you can ignore
Feel free to ignore files and folder having names that start with a dot, as well as the `test` and `node_modules` folder
and the `package.*` files. Those are only used by the Helix team to validate this test with CircleCI.

_TODO: we might hide those files in a separate branch that's merged before running the tests_

## How to play with this example
You can modifiy the `*.md` files at will and add new ones. Changes are published automatically, within a few seconds. _TODO add caching info_.

For now the only 'magic' files are `header.md` and `footer.md`, other files are considered to be pages of your Helix website.



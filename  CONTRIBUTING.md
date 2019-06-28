## Contributing ❤️

First off, thank you for considering contributing to this library. It's people like you that make open source **awesome**.

### Code of conduct 😃

Be a nice person and respect the other people.

### Where do I go from here? 🤔

If you've noticed a bug or have a question that isn't reported yet, please [`open an issue`](https://github.com/xerebede/gridsome-plugin-typescript/issues).

### Fork & create a branch 🌳

If this is something you think you can fix, then [`fork`](https://github.com/xerebede/gridsome-plugin-typescript/fork) this repository and create a branch with a descriptive name.

We use a pattern to create branches in this project. Please follow the branch name pattern as described below:

```
[type]/[short-description]
```

**Where**

`[type]`: is one of the following words:

```
build,
ci,
chore,
docs,
feat,
fix,
perf,
refactor,
revert,
style,
test
```

`[short-description]`: is a description of the change which you are proposing.

A good branch name would be:

```bash
# fix/config-typo

git checkout -b fix/config-typo
```

### Commit rules 📝

We are using [`gitmoji`](https://gitmoji.carloscuesta.me/) to standardize the commit messages. The `gitmoji` team provides a nice [`cli`](https://github.com/carloscuesta/gitmoji-cli) tool that you can use to create your commits. Please read the `gitmoji` docs and use it in your commits.

### Make a Pull Request ️⬆️

At this point, you should switch back to your master branch and make sure it's up to date with the remote master branch:

```
git remote add upstream https://github.com/xerebede/gridsome-plugin-typescript.git
git checkout master
git pull upstream master
```

Then update your feature branch from your local copy of master, and push it!

```
git checkout fix/config-typo
git rebase master
git push --set-upstream origin fix/config-typo
```

Finally, go to GitHub and [`make a Pull Request`](https://help.github.com/articles/creating-a-pull-request).

### Keeping your Pull Request updated ↕️

If a maintainer asks you to "rebase" your PR, they're saying that a lot of code has changed, and that you need to update your branch so it's easier to merge.

To learn more about rebasing in Git, there are a lot of good resources but here's the suggested workflow:

```
git checkout fix/config-typo
git pull --rebase upstream master
git push --force-with-lease fix/config-typo
```

Learn more about `rebasing` [`here`](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase) and [`here`](https://git-scm.com/book/en/v2/Git-Branching-Rebasing).
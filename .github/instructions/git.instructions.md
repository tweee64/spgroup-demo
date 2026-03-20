---
applyTo: '__NEVER_MATCH__'
---

# Git Workflow & Best Practices

## Branch Naming Strategy (Trunk-Based Development)

This project follows a **trunk-based development** approach with short-lived feature branches that merge frequently into the main branch.

### Branch Naming Rules
Use this exact naming pattern:
```
<type>/<kebab-case-description>
```

**Required branch types:**
- `feature/` - New features (e.g., `feature/user-login`, `feature/rule-builder`)
- `fix/` - Bug fixes (e.g., `fix/validation-error`, `fix/mobile-layout`)
- `docs/` - Documentation (e.g., `docs/api-guide`, `docs/readme-update`)
- `refactor/` - Code refactoring (e.g., `refactor/auth-service`, `refactor/components`)
- `style/` - Code style (e.g., `style/tailwind-cleanup`, `style/prettier-format`)
- `test/` - Testing (e.g., `test/unit-tests`, `test/e2e-auth`)
- `chore/` - Maintenance (e.g., `chore/dependency-update`, `chore/build-config`)

**Branch naming requirements:**
1. Use lowercase only
2. Separate words with hyphens (kebab-case)
3. Keep description under 30 characters
4. Be descriptive but concise

### Trunk-Based Development Rules
1. **Always use terminal commands for Git operations** - Never use GUI Git operations
2. **Always branch from main** - Use `git checkout main && git pull origin main && git checkout -b <branch-name>`
3. **Use only these branch patterns** - `feature/`, `fix/`, `docs/`, `refactor/`, `style/`, `test/`, `chore/`
4. **Delete branches after tasks** - Always include cleanup commands: `git branch -d <branch-name>` and `git push origin --delete <branch-name>`
5. **Use conventional commit format** - Always format commits as `<type>[scope]: <description>` with no period at end

## Conventional Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for clear, consistent commit messages.

### Commit Message Format
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Commit Types
- **`feat`** - New features
- **`fix`** - Bug fixes
- **`docs`** - Documentation changes
- **`style`** - Code style changes (formatting, missing semicolons, etc.)
- **`refactor`** - Code refactoring without changing functionality
- **`test`** - Adding or updating tests
- **`chore`** - Maintenance tasks, dependency updates
- **`perf`** - Performance improvements
- **`ci`** - CI/CD configuration changes

### Commit Message Examples

#### Simple commits:
```bash
feat: add user registration form
fix: resolve validation error in email field
docs: update installation instructions
style: format components with prettier
refactor: extract utility functions to separate file
test: add unit tests for authentication logic
chore: update dependencies to latest versions
```

#### Commits with scope:
```bash
feat(auth): implement JWT token validation
fix(ui): correct button alignment in mobile view
docs(api): add endpoint documentation
refactor(components): simplify button component props
test(utils): add validation helper tests
```

#### Commits with breaking changes:
```bash
feat!: change API response format

BREAKING CHANGE: API responses now use camelCase instead of snake_case
```

#### Multi-line commits:
```bash
feat(rules): add rule validation engine

- Implement validation for rule conditions
- Add error handling for invalid rule syntax
- Include comprehensive test coverage

Closes #123
```

### Commit Message Rules
When committing code, you must:

1. **Use imperative mood**: "add", "fix", "update" (not "added", "fixed", "updated")
2. **Keep first line under 50 characters**: Truncate if necessary
3. **No period at end**: `feat: add user auth` ✅ not `feat: add user auth.` ❌
4. **Include scope when relevant**: `feat(auth):`, `fix(ui):`, `docs(api):`
5. **Use these commit types only**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`

### Required Commit Format Template
```bash
git commit -m "<type>[optional-scope]: <description>"
```

Examples to use:
- `feat: add user authentication system`
- `fix(ui): resolve button alignment on mobile`
- `docs: update API documentation`
- `refactor(components): extract button component`
- `style: format code with prettier`
- `test: add unit tests for auth service`
- `chore: update dependencies`

### Git Command Rules
When implementing features or fixes, you must:

1. **Always check status first**: Start with `git status` to understand current state
2. **Create feature branch**: Use `git checkout -b <type>/<short-kebab-case-description>`
3. **Stage specific files**: Use `git add <specific-files>` rather than `git add .` when possible
4. **Use conventional commits**: Format as `<type>[optional-scope]: <description>` (no period)
5. **Include cleanup commands**: Provide commands to delete branch after merge

### Required Git Workflow Commands
For any code changes, provide this exact sequence:

```bash
# 1. Check current status and switch to main
git status
git checkout main
git pull origin main

# 2. Create feature branch
git checkout -b <type>/<description>

# 3. After making changes, stage and commit
git add <specific-files>
git commit -m "<type>[scope]: <description>"

# 4. Push branch
git push origin <type>/<description>

# 5. After PR merge, cleanup
git checkout main
git pull origin main
git branch -d <type>/<description>
git push origin --delete <type>/<description>
```

### Essential Git Commands

**Branch Operations:**
```bash
git checkout -b <type>/<description>    # Create and switch to new branch
git checkout main                       # Switch to main branch
git branch -d <branch-name>            # Delete local branch
git push origin --delete <branch-name> # Delete remote branch
```

**Staging and Committing:**
```bash
git add <specific-files>               # Stage specific files
git commit -m "<type>: <description>"  # Commit with conventional format
git push origin <branch-name>          # Push branch to remote
```

**Syncing:**
```bash
git status                             # Check current state
git pull origin main                   # Update main branch
```

### Pre-commit Requirements
Before each commit, you must:
1. **Run linting**: Execute `npm run lint` and fix any errors
2. **Verify commit format**: Ensure message follows `<type>[scope]: <description>` pattern
3. **Check file staging**: Only stage files related to the current change
4. **Avoid sensitive data**: Never commit API keys, passwords, or secrets
5. **Keep commits atomic**: One logical change per commit (split large changes)

### Branch Cleanup Commands
When a task is complete, provide these cleanup commands:
```bash
git checkout main
git pull origin main
git branch -d <branch-name>
git push origin --delete <branch-name>
```

## Git Implementation Rules

### When Creating New Features
Execute these commands in order:
```bash
git status
git checkout main
git pull origin main
git checkout -b feature/<feature-name>
# ... make code changes ...
npm run lint
git add <specific-changed-files>
git commit -m "feat: <description>"
git push origin feature/<feature-name>
```

### When Fixing Bugs
```bash
git status
git checkout main
git pull origin main
git checkout -b fix/<bug-description>
# ... make code changes ...
npm run lint
git add <specific-changed-files>
git commit -m "fix: <description>"
git push origin fix/<bug-description>
```

### After Pull Request Merge
Always provide cleanup commands:
```bash
git checkout main
git pull origin main
git branch -d <branch-name>
git push origin --delete <branch-name>
```

### Required Command Structure
1. **Never use `git add .`** - Always specify files: `git add src/components/Button.tsx`
2. **Always start with `git status`** - Check current state first
3. **Always pull latest main** - Ensure up-to-date before branching
4. **Always provide cleanup** - Include branch deletion commands
5. **Use terminal commands only** - Never use GUI operations
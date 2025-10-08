# Mindcraft - Contributor Guidelines

Thank you for your interest in contributing to Mindcraft! 🎉

## Ways to Contribute

- 🐛 Report bugs
- 💡 Suggest new features
- 📝 Improve documentation
- 🎨 Design improvements
- 💻 Code contributions
- 🌍 Translations

## Development Setup

See [SETUP.md](SETUP.md) for detailed installation instructions.

Quick start:
```bash
git clone <repository-url>
cd mindcraft
npm install
npm run dev
```

## Code Guidelines

### TypeScript
- Always use TypeScript
- Define interfaces for all props
- Avoid `any` type

### Components
- Functional components only
- Use React hooks
- Keep components focused and reusable

### Styling
- Use TailwindCSS utilities
- Follow existing design system
- Ensure responsive design (mobile-first)

### Naming Conventions
- Components: PascalCase (`ModuleCard.tsx`)
- Files: camelCase (`modulesData.ts`)
- CSS classes: Follow Tailwind conventions

## Commit Messages

Use conventional commits:
- `feat: add new quiz feature`
- `fix: resolve navigation bug`
- `docs: update README`
- `style: format code`
- `refactor: restructure components`

## Pull Request Process

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Commit changes (`git commit -m 'feat: add amazing feature'`)
6. Push to branch (`git push origin feature/amazing-feature`)
7. Open Pull Request

### PR Checklist
- [ ] Code follows style guidelines
- [ ] TypeScript compiles without errors
- [ ] Tested on mobile and desktop
- [ ] Documentation updated if needed
- [ ] No console errors or warnings

## Adding New Modules

1. Add module to `utils/modulesData.ts`
2. Create quiz in `components/modules/ModuleQuiz.tsx`
3. Add demo in `components/modules/InteractiveDemo.tsx`
4. Test routing and functionality

## Testing

Before submitting:
```bash
npm run build    # Check for TypeScript errors
npm run lint     # Check code style
```

## Code Review

All submissions require review. We aim to:
- Respond within 48 hours
- Provide constructive feedback
- Merge within 1 week if approved

## Questions?

- 📧 Email: izmirglobalshapers@gmail.com
- 💬 Open an issue for discussion

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

**Thank you for making Mindcraft better!** ❤️

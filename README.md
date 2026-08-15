# PRIMEVO — Site institucional PT/ES

Site institucional bilíngue desenvolvido em React com Next.js e TypeScript.

## Executar localmente

```bash
npm install
npm run dev
```

Acesse:

- `http://localhost:3000/pt`
- `http://localhost:3000/es`

O middleware identifica o idioma do navegador e redireciona automaticamente para português ou espanhol.

## Estrutura principal

- `app/[lang]/page.tsx`: página institucional
- `lib/content.ts`: todos os textos em português e espanhol
- `app/globals.css`: identidade visual e responsividade
- `public/primevo-logo.jpeg`: logotipo enviado

## Próximas integrações recomendadas

- Formulário com envio real e proteção antispam
- WhatsApp comercial
- Google Analytics / Tag Manager
- SEO técnico com sitemap e dados estruturados
- Páginas individuais de serviços
- Política de privacidade e cookies

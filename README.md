# playwright-e2e-stack

## 🐛 for Local（E2E）

```bash
docker-compose up -d
docker compose exec test bash -c "npx playwright test"
```

## 🐝 for Local（VRT）

```bash
VITE_API_URL=http://localhost:3000 docker-compose up -d test
docker compose exec test bash -c "npx playwright test -c playwright.config.vrt.ts"
```

## 🌈 GitHub Actions

```bash
0 0 * * * # 毎日 9:00 (JST)
```

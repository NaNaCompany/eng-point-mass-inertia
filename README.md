# 점질량 집합 관성모멘트 계산기

점질량별 질량과 회전축까지의 수직거리를 목록으로 입력하여 전체 질량관성모멘트를 합산합니다.

- ID: E128
- App: https://nanalab.kr/eng-point-mass-inertia/
- Repository: https://github.com/NaNaCompany/eng-point-mass-inertia
- Formula: I = Σ mᵢ rᵢ²

## Model and data

모든 rᵢ는 동일한 회전축까지의 최단 수직거리입니다. 각 항목은 점질량으로 취급하므로 개별 부품 자체의 관성모멘트는 포함하지 않습니다. 축 위의 점은 rᵢ=0으로 입력합니다. 1~100개의 항목을 추가·삭제할 수 있습니다.

Inputs normalize to SI. Repeated-input models support adding/removing actual input rows. Calculations, finite-number checks and physical-domain checks run locally; no external property database or solver API is used.

## Validation

Run node --test tests/*.test.mjs and python scripts/build-locales.py --check. tests/reference.json contains independently computed high-precision default and boundary references. The source notices distinguish original MIT work from citation-only external references.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.

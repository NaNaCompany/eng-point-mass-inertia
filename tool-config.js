export const tool={
  "id": "E128",
  "slug": "eng-point-mass-inertia",
  "title": "점질량 집합 관성모멘트 계산기",
  "title_en": "Point-mass moment of inertia calculator",
  "category": "역학·재료",
  "category_en": "Mechanics and materials",
  "fields": [],
  "result_label": "지정 회전축에 대한 관성모멘트 I",
  "result_label_en": "Moment of inertia about the stated axis I",
  "result_dimension": "massInertia",
  "formula": "I = Σ mᵢ rᵢ²",
  "purpose": "점질량별 질량과 회전축까지의 수직거리를 목록으로 입력하여 전체 질량관성모멘트를 합산합니다.",
  "purpose_en": "Sum the moment of inertia of a list of point masses using perpendicular distances to one stated axis.",
  "assumptions": "모든 rᵢ는 동일한 회전축까지의 최단 수직거리입니다. 각 항목은 점질량으로 취급하므로 개별 부품 자체의 관성모멘트는 포함하지 않습니다. 축 위의 점은 rᵢ=0으로 입력합니다. 1~100개의 항목을 추가·삭제할 수 있습니다.",
  "assumptions_en": "Required: each rᵢ is the shortest perpendicular distance to the same rotation axis. Every entry is a point mass; each component’s intrinsic moment of inertia is excluded. A point on the axis has rᵢ = 0. The list supports 1 to 100 entries.",
  "sources": [
    {
      "label": "OpenStax — moment of inertia and rotational kinetic energy",
      "url": "https://openstax.org/books/university-physics-volume-1/pages/10-4-moment-of-inertia-and-rotational-kinetic-energy"
    }
  ],
  "condition": "같은 축에 대한 수직거리와 점질량 근사 조건을 확인했습니다.",
  "condition_en": "I confirm perpendicular distances to one axis and the point-mass approximation.",
  "groups": [
    {
      "key": "points",
      "label": "점질량 목록",
      "label_en": "Point-mass list",
      "fields": [
        {
          "key": "m",
          "label": "질량 mᵢ",
          "label_en": "Mass mᵢ",
          "dimension": "mass",
          "example": 2,
          "constraint": "positive",
          "display_unit": "kg"
        },
        {
          "key": "r",
          "label": "축까지 수직거리 rᵢ",
          "label_en": "Perpendicular axis distance rᵢ",
          "dimension": "length",
          "example": 0.5,
          "constraint": "nonnegative",
          "display_unit": "m"
        }
      ],
      "examples": [
        {
          "m": 2,
          "r": 0.5
        },
        {
          "m": 3,
          "r": 0.2
        },
        {
          "m": 1,
          "r": 0
        }
      ],
      "minRows": 1,
      "maxRows": 100
    }
  ],
  "site": "https://nanalab.kr/eng-point-mass-inertia/",
  "repository": "https://github.com/NaNaCompany/eng-point-mass-inertia",
  "output_unit": "kgm2"
};

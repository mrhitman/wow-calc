export function getAvailablePoints(state, maxPoints = 80) {
  return maxPoints - Object.values(state.points).reduce((acc, v) => acc + v, 0);
}

export function canAddPoint(state, skill, maxPoints = 80) {
  const points = state.points[skill.id] ?? 0;
  return getAvailablePoints(state, maxPoints) > 0 && points < skill.maxPoints;
}
import type { Ref } from "vue";
import { readonly, ref } from "vue";

export function useReactions(
  initialState: number,
): [Readonly<Ref<number>>, () => void, Readonly<Ref<boolean>>] {
  const reactionValue = ref(initialState);
  const hasReacted = ref(false);
  const toggleReaction = () => {
    if (hasReacted.value) {
      reactionValue.value += -1;
    } else {
      reactionValue.value += 1;
    }
    hasReacted.value = !hasReacted.value;
  };

  return [readonly(reactionValue), toggleReaction, readonly(hasReacted)];
}

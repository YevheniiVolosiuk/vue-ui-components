<template>
    <BaseLayout>
        <div class="mx-auto max-w-5xl space-y-16 px-4 py-16">
            <PresentetionSection title="Colors">
                <ColorTileUi v-for="(color, index) in uiColors" :key="index" :color="color" />
            </PresentetionSection>
            <PresentetionSection title="Typography">
                <TypographyUi
                    v-for="(theme, index) in typographyThemes"
                    :key="index"
                    :theme="theme"
                    tag="label"
                    capitalize="true"
                >
                    {{ theme }}
                </TypographyUi>
            </PresentetionSection>
            <PresentetionSection title="Avatars">
                <div class="flex items-center justify-between space-x-2">
                    <AvatarUi
                        name="Ion Doe"
                        image="https://images.pexels.com/photos/4871012/pexels-photo-4871012.jpeg" size="sm"
                        :is-online="true"
                    />
                    <AvatarUi
                        name="Lon Doe"
                        image="https://images.pexels.com/photos/4871012/pexels-photo-4871012.jpeg" size="md"
                    />
                    <AvatarUi
                        name="Con Doe"
                        image="https://images.pexels.com/photos/4871012/pexels-photo-4871012.jpeg"  size="lg"
                    />
                </div>

                <div class="flex items-center justify-between space-x-2">
                    <AvatarUi name="Mona Po" size="sm" rounded="sm" />
                    <AvatarUi name="Bona Po" size="md" rounded="md" />
                    <AvatarUi name="Gona Po" size="lg" rounded="lg" :is-online="true" />
                </div>
            </PresentetionSection>
        </div>
    </BaseLayout>
</template>

<script setup>
    import { computed } from 'vue';
    import BaseLayout from '../layouts/BaseLayout.vue';
    import ColorTileUi from '../components/ui/ColorTileUi.vue';
    import TypographyUi from '../components/ui/TypographyUi.vue';
    import PresentetionSection from '../components/utils/PresentetionSection.vue';
    import AvatarUi from '../components/ui/AvatarUi.vue';

    const uiColors = computed(() => [
        'bg-page',
        'bg-primary',
        'bg-primary-accent',
        'bg-default',
        'bg-muted',
        'bg-border',
    ]);

    const typographyThemes = computed(() => ['h1', 'h2', 'h3', 'h4', 'p', 'default']);
</script>

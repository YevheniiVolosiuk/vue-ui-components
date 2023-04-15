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
                        image="https://images.pexels.com/photos/4871012/pexels-photo-4871012.jpeg"
                        size="xl"
                        rounded="full"
                        :is-online="true"
                    />
                    <AvatarUi
                        name="Lon Doe"
                        image="https://images.pexels.com/photos/4871012/pexels-photo-4871012.jpeg"
                        size="md"
                        rounded="md"
                    />
                    <AvatarUi
                        name="Con Doe"
                        image="https://images.pexels.com/photos/4871012/pexels-photo-4871012.jpeg"
                        size="lg"
                        rounded="lg"
                    />
                </div>

                <div class="flex items-center justify-between space-x-2">
                    <AvatarUi name="Mona Po" size="sm" rounded="sm" />
                    <AvatarUi name="Bona Po" size="md" rounded="md" />
                    <AvatarUi name="Gona Po" size="lg" rounded="lg" :is-online="true" />
                </div>
            </PresentetionSection>

            <PresentetionSection title="Buttons">
                <div class="flex justify-between items-center  gap-4">
                    <div class="flex-[1_1_25%] inline-flex justify-center">
                        <ButtonUi type="button">primary</ButtonUi>
                    </div>
                    <div class="flex-[1_1_25%] inline-flex justify-center">
                        <ButtonUi intent="green" type="button">green</ButtonUi>
                    </div>
                    <div class="flex-[1_1_25%] inline-flex justify-center">
                        <ButtonUi intent="red" type="button">red</ButtonUi>
                    </div>
                    <div class="flex-[1_1_25%] inline-flex justify-center">
                        <ButtonUi intent="yellow" type="button">yellow</ButtonUi>
                    </div>
                </div>
                <div class="flex justify-between items-center  gap-4">
                    <div class="flex-[1_1_25%] inline-flex justify-center">
                        <ButtonUi is-not-capitalize type="button">primary</ButtonUi>
                    </div>
                    <div class="flex-[1_1_25%] inline-flex justify-center">
                        <ButtonUi is-not-capitalize intent="green" type="button">green</ButtonUi>
                    </div>
                    <div class="flex-[1_1_25%] inline-flex justify-center">
                        <ButtonUi is-not-capitalize intent="red" type="button">red</ButtonUi>
                    </div>
                    <div class="flex-[1_1_25%] inline-flex justify-center">
                        <ButtonUi is-not-capitalize intent="yellow" type="button">yellow</ButtonUi>
                    </div>
                </div>
                <div class="flex justify-between items-center  gap-4">
                    <div class="flex-[1_1_25%] inline-flex justify-center">
                        <ButtonUi is-loading type="button">primary</ButtonUi>
                    </div>
                    <div class="flex-[1_1_25%] inline-flex justify-center">
                        <ButtonUi is-loading intent="green" type="button">green</ButtonUi>
                    </div>
                    <div class="flex-[1_1_25%] inline-flex justify-center">
                        <ButtonUi is-loading intent="red" type="button">red</ButtonUi>
                    </div>
                    <div class="flex-[1_1_25%] inline-flex justify-center">
                        <ButtonUi is-loading intent="yellow" type="button">yellow</ButtonUi>
                    </div>
                </div>
                <div class="flex justify-between items-center  gap-4">
                    <div class="flex-[1_1_25%] inline-flex justify-center">
                        <ButtonUi is-disabled type="button">primary</ButtonUi>
                    </div>
                    <div class="flex-[1_1_25%] inline-flex justify-center">
                        <ButtonUi is-disabled intent="green" type="button">green</ButtonUi>
                    </div>
                    <div class="flex-[1_1_25%] inline-flex justify-center">
                        <ButtonUi is-disabled intent="red" type="button">red</ButtonUi>
                    </div>
                    <div class="flex-[1_1_25%] inline-flex justify-center">
                        <ButtonUi is-disabled intent="yellow" type="button">yellow</ButtonUi>
                    </div>
                </div>
                <div class="flex justify-between items-center  gap-4">
                    <div class="flex-[1_1_25%] inline-flex justify-center">
                        <ButtonUi :left-icon="FolderPlusIcon" type="button">primary</ButtonUi>
                    </div>
                    <div class="flex-[1_1_25%] inline-flex justify-center">
                        <ButtonUi :right-icon="FolderPlusIcon" intent="green" type="button">green</ButtonUi>
                    </div>
                    <div class="flex-[1_1_25%] inline-flex justify-center">
                        <ButtonUi :left-icon="FolderPlusIcon" :right-icon="FolderPlusIcon" intent="red" type="button">red</ButtonUi>
                    </div>
                    <div class="flex-[1_1_25%] inline-flex justify-center">
                        <ButtonUi left-icon intent="yellow" type="button">yellow</ButtonUi>
                    </div>
                </div>
                <div class="flex justify-between items-center  gap-4">
                    <div class="flex-[1_1_25%] inline-flex justify-center">
                        <ButtonUi size="sm" type="button">primary</ButtonUi>
                    </div>
                    <div class="flex-[1_1_25%] inline-flex justify-center">
                        <ButtonUi intent="green" type="button">green</ButtonUi>
                    </div>
                    <div class="flex-[1_1_25%] inline-flex justify-center">
                        <ButtonUi size="lg"  :right-icon="FolderPlusIcon" intent="red" type="button">red</ButtonUi>
                    </div>
                    <div class="flex-[1_1_25%] inline-flex justify-center">
                        <ButtonUi size="xl"  intent="yellow" type="button">yellow</ButtonUi>
                    </div>
                </div>
            </PresentetionSection>
        </div>
    </BaseLayout>
</template>

<script setup>
    import { computed } from "vue";
    import { FolderPlusIcon } from "@heroicons/vue/24/solid";
    import BaseLayout from "../layouts/BaseLayout.vue";
    import ButtonUi from "../components/ui/ButtonUi.vue";
    import AvatarUi from "../components/ui/AvatarUi.vue";
    import ColorTileUi from "../components/ui/ColorTileUi.vue";
    import TypographyUi from "../components/ui/TypographyUi.vue";
    import PresentetionSection from "../components/utils/PresentetionSection.vue";

    const uiColors = computed(() => [
        "bg-page",
        "bg-primary",
        "bg-primary-accent",
        "bg-default",
        "bg-muted",
        "bg-border",
    ]);

    const typographyThemes = computed(() => ["h1", "h2", "h3", "h4", "p", "default"]);
</script>

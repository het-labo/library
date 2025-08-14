<script setup>
const props = defineProps({
    cover: {
        type: String,
        default: 'https://via.placeholder.com/150'
    },
    label: {
        type: String,
        default: 'Default label'
    },
    title: {
        type: String,
        default: 'Default link'
    },
    content: {
        type: String,
        default: 'Default content'
    },
    link: {
        type: Object,
        default: () => ({
            title: 'test',
            url: ''
        })
    }
})
</script>

<template>

    <article class="card" itemscope itemtype="https://schema.org/Service">
        <meta itemprop="serviceType" content="SEO audit" />
        <meta itemprop="areaServed" content="Belgium" />
        <meta itemprop="provider" content="Het Labo" />

        <div class="card-cover">
            <picture :style="`background-image: url(${cover})`"></picture>
            <img 
                :src="cover"
                alt="Laptop met grafieken voor een SEO-audit"
                loading="lazy"
                decoding="async"
                itemprop="image"
            />
        </div>
        <div class="card-content">
            <header>
                <label class="label" aria-label="Categorie">{{ label }}</label>
                <h4 itemprop="name">{{ title }}</h4>
            </header>
            <div class="card-excerpt" itemprop="description">
                <p>{{ content }}</p>
            </div>
            <footer>
                <a :href="link.url" itemprop="url">
                    <span class="link-title">{{ link.title }}</span>
                    <span class="link-icon" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
                    </span>
                </a>
            </footer>
        </div>
    </article>

</template>

<style scoped lang="scss">
.card {
    position: relative;
    min-width: 220px;
    max-width: 560px;

    &-cover {
        position: relative;
        max-height: 220px;

        picture {
            position: absolute;
            inset: 0;
            background-size: cover;
            background-position: center;
        }

        img {
            opacity: 0;
            pointer-events: none;
        }
    }

    &-content {
        display: flex;
        flex-direction: column;
        gap: 48px;
        padding: 48px;
        background: #F6F6F6;
        
        p {
            opacity: .75;
        }

        a {
            display: flex;
            align-items: center;
            gap: 4px;
            text-decoration: none;

            .link-title {
                text-decoration: underline;
                text-underline-offset: 4px;
                text-decoration-thickness: 1px;
            }            
        }

        header {
            .label {
                opacity: .65;
            }
        }
    }

    a {
        &::before {
            content: '';
            position: absolute;
            inset: 0;
        }
    }

    &:hover {
        .card-content {
            background: linear-gradient(135deg, #00417E 0%, #1C51BC 100%);
            color: #FFF;

            svg {
                stroke: #FFF;
            }
        }
    }
}
</style>
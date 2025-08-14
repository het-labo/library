<template>
    <nav>
        <ul>
            <li>
                <NuxtLink to="/">
                    <div class="label">
                        <span class="icon"></span><span>Home</span>
                    </div>
                    <span class="arrow"></span>
                </NuxtLink>
            </li>

            

        </ul>
    </nav>

    <nav>
        <header><h6>Tools!!!</h6></header>
        <ul>
            <li>
                <NuxtLink href="/tools/signature-builder">
                    <div class="label">
                        <span class="icon">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" stroke-width="1.4"><g clip-path="url(#clip0_3787_399)"><path d="M17.6744 11.4078L15.7691 17.1236C15.7072 17.3094 15.5586 17.4532 15.3709 17.509L3.69348 20.9807C3.22819 21.119 2.79978 20.6763 2.95328 20.2158L6.74467 8.84167C6.79981 8.67625 6.92419 8.543 7.08543 8.4766L12.472 6.25859C12.696 6.16636 12.9535 6.21785 13.1248 6.38913L17.5294 10.7938C17.6901 10.9545 17.7463 11.1922 17.6744 11.4078Z" stroke="#000000" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.2959 20.6016L9.65986 14.2376" stroke="#000000" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.4029 3.18183L20.7666 5.54552C21.4727 6.25158 21.4893 7.3911 20.8042 8.11745C20.0901 8.8744 18.8919 8.89188 18.1561 8.15608L15.7924 5.79239C15.0766 5.07655 15.0708 3.91775 15.7795 3.19485C16.4982 2.46172 17.677 2.45587 18.4029 3.18183Z" fill="#000000" stroke="#000000" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.7814 12.1159C11.1956 11.5301 10.2458 11.5301 9.66004 12.1159C9.07426 12.7017 9.07426 13.6514 9.66004 14.2372C10.2458 14.823 11.1956 14.823 11.7814 14.2372C12.3671 13.6514 12.3671 12.7017 11.7814 12.1159Z" stroke="#000000" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_3787_399"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
                        </span>
                        <span>Signature Builder</span>
                    </div>
                    <span class="arrow"></span>
                </NuxtLink>
            </li>
        </ul>
    </nav>
    
    <nav>
        <header><h6>Branding</h6></header>
        <ul>
            <li>
                <NuxtLink to="/brand/logo">
                    <div class="label">
                        <span class="icon"></span><span>Logo</span>
                    </div>
                    <span class="arrow"></span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/brand/colors">
                    <div class="label">
                        <span class="icon"></span><span>Colors</span>
                    </div>
                    <span class="arrow"></span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/brand/typography">
                    <div class="label">
                        <span class="icon"></span><span>Typography</span>
                    </div>
                    <span class="arrow"></span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/brand/icons">
                    <div class="label">
                        <span class="icon"></span><span>Icons</span>
                    </div>
                    <span class="arrow"></span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/brand/layout">
                    <div class="label">
                        <span class="icon"></span><span>Spacing & Layout</span>
                    </div>
                    <span class="arrow"></span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/brand/images">
                    <div class="label">
                        <span class="icon"></span><span>Images</span>
                    </div>
                    <span class="arrow"></span>
                </NuxtLink>
            </li>
        </ul>
    </nav>

    <nav>
        <header><h6>Components</h6></header>
        <ul>
            <li>
                <NuxtLink to="/component/button">
                    <div class="label">
                        <span class="icon"></span><span>Buttons</span>
                    </div>
                    <span class="arrow"></span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/component/card">
                    <div class="label">
                        <span class="icon"></span><span>Cards</span>
                    </div>
                    <span class="arrow"></span>
                </NuxtLink>
            </li>
        </ul>
    </nav>

    <nav>
        <header><h6>Interaction</h6></header>
        <ul>
            <li>
                <NuxtLink to="/states">
                    <div class="label">
                        <span class="icon"></span><span>States</span>
                    </div>
                    <span class="arrow"></span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/motion">
                    <div class="label">
                        <span class="icon"></span><span>Motion</span>
                    </div>
                    <span class="arrow"></span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/a11y">
                    <div class="label">
                        <span class="icon"></span><span>A11y</span>
                    </div>
                    <span class="arrow"></span>
                </NuxtLink>
            </li>
        </ul>
    </nav>
    <nav>
        <header><h6>Snippets</h6></header>
        <ul>
            <li>
                <NuxtLink to="/snippets/tag-filter">
                    <div class="label">
                        <span class="icon"></span><span>Tag Filter</span>
                    </div>
                    <span class="arrow"></span>
                </NuxtLink>
            </li>
        </ul>
    </nav>
    
</template>

<style>
:root {
    --color-heavy: #d28500;
}
</style>

<style scoped lang="scss">
.spacer {
    height: 10px;
}
nav {
    position: relative;
    padding: 1.5rem 1rem 1.5rem 1.5rem;
    border-bottom: 1px solid #E5E5E5;

    header {
        margin: 0 0 .5rem;
        padding: 0 1rem 0 2rem;

        h6 {
            font-size: .75rem;
            font-weight: 600;
            letter-spacing: .075em;
            text-transform: uppercase;
            color: #0000009c;
        }
    }

    ul {
        display: flex;
        flex-direction: column;

        li {
            a {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: .25rem .5rem;
                border-radius: .25rem;
                border: 1px solid transparent;

                * {
                    transition: all .35s ease-in-out;
                }

                &::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 33%;
                    bottom: 33%;
                    width: 2px;
                    background-color: var(--color-heavy);
                    pointer-events: none;
                    opacity: 0;
                    transition-duration: .5s;
                }

                &.router-link-active,
                &:hover {
                    background-color: #fff4e1;
                    color: #ffa200;
                    color: var(--color-heavy);
                    border-color: #ffefd3;

                    &::before {
                        opacity: 1;
                    }

                    svg,
                    svg path {
                        stroke: var(--color-heavy);
                    }

                    .label {
                        &::after {
                            background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #fff4e1 90%, #fff4e1 100%);
                        }
                    }

                    .arrow {
                        svg {
                            left: .25rem;
                        }
                    }
                }

                svg {
                    position: relative;
                    left: 0;
                }

                .label {
                    position: relative;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    width: 100%;
                    overflow: hidden;

                    &::after {
                        content: '';
                        position: absolute;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        width: 30px;
                        background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 90%, rgb(255, 255, 255) 100%);
                    }
                }

                .title {
                    white-space: nowrap;
                }

                .icon {
                    min-width: 20px;

                    svg {
                        width: 18px;
                        height: 18px;
                    }
                }

                .arrow {
                    svg {
                        transition-duration: .5s;
                    }
                }
            }
        }
    }
}
</style>
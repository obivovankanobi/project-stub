({
    block: 'b-page',
    title: 'Hombilbre',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_index.js' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    content:[
        {
            block: 'wrap',
            content: [
               {
                    block: 'header',
                    content: [
                        {
                            elem: 'heading',
                            tag: 'h1',
                            content: 'Homlibre'
                        },
                        {
                            block: 'menu',
                            tag: 'ul',
                            content : [
                                {
                                    elem: 'item',
                                    tag: 'li',
                                    content: [
                                        {
                                            block: 'b-link', 
                                            mix: [{ block: 'show-login'}],
                                            mods: { type: 'pseudo-link' },                                        
                                            content: 'Вход'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    tag: 'li',
                                    content: [
                                        {
                                            block: 'b-link', 
                                            mix: [{ block: 'show-sign-up'}],
                                            mods: { type: 'pseudo-link' },                                         
                                            content: 'Регистрация'
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    tag: 'li',
                                    content: [
                                        {
                                           block: 'expand',
                                           content: [
                                                {
                                                    elem: 'current-lang',
                                                    tag: 'span',
                                                    content: 'русский'
                                                },
                                                {
                                                    block: 'menu',
                                                    mods: { expand: 'yes'},
                                                    tag: 'ul',
                                                    content: [
                                                        {                                                            
                                                            elem: 'list-item',
                                                            tag: 'li',
                                                            content: 'русский'
                                                        },
                                                        {
                                                            elem: 'list-item',
                                                            tag: 'li',
                                                            content: 'албанский'
                                                        },
                                                        {
                                                           elem: 'list-item',
                                                           tag: 'li',
                                                           content: 'турецкий'
                                                        },
                                                        {
                                                           elem: 'list-item',
                                                           tag: 'li',
                                                           content: 'французкий'
                                                        }
                                                    ]                                                 
                                                }
                                           ]
                                        }
                                    ]
                                }
                            ]
                        } 
                    ]
               },
               {
                    block: 'content',
                    content: [
                        {
                            elem: 'left-side'
                        },
                        {
                            elem: 'right-side',
                            content: [
                                {
                                    block: 'multi-colored-heading',
                                    tag: 'h2',
                                    content: [
                                        {

                                        }
                                    ]
                                }
                            ]
                        }
                                        
                    ]
               }
            ]
        }        
    ]
})

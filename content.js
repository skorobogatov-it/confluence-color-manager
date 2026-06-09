const cssTemplate = `
.wiki-content h1, .wiki-content h2 { border-bottom-color: #d1793f; }
.wiki-content-preview { border-left-color: #333; border-right-color: #333; }
.pageSectionHeader { border-bottom-color: #DFE1E6; }
.panel { border-color: #d1793f; }
.panelHeader, .menuheading, .pageheader, .sectionbottom { border-bottom-color: #d1793f; }
.topRow { border-top-color: #d1793f; }
.tabletitle, .pageSectionHeader { border-bottom-color: #d1793f; }
blockquote { border-left-color: #d1793f; }
a, a:visited, a:focus, a:hover, a:active, a.blogHeading { color: #333; }
.acs-side-bar-space-info a, .acs-side-bar .tip a, .ia-secondary-container a { color: #333; }
.aui-nav-vertical li a:link, .aui-nav-vertical li a:focus, .aui-nav-vertical li a:visited, .aui-nav-vertical li a:active { color: #333; }
.wiki-content a, .wiki-content a:link, .wiki-content a:visited, .wiki-content a:focus, .wiki-content a:hover, .wiki-content a:active { color: #333; text-decoration:underline; }
.ia-secondary-content .acs-tree-item .navigation-pseudo-link { color: #FF6600; }
a.visitable:visited { color: #333; }
.createlink, a.createlink, a.createlink:link, a.createlink:visited, a.createlink:active, a.createlink:hover { text-decoration: underline; color: #6D1806; }
.unresolved, a.unresolved, a.unresolved:link, a.unresolved:visited, a.unresolved:active, a.unresolved:hover { text-decoration: underline; color: #828282; }
.not-permitted, a.not-permitted, a.not-permitted:link, a.not-permitted:visited, a.not-permitted:hover, a.not-permitted:active { color: #cc0000; }
.grey, a.grey, a.grey:link, a.grey:visited, a.grey:hover, a.grey:active { color: #666; }
#tinymce.wiki-content a, #tinymce.wiki-content a:link, #tinymce.wiki-content a:visited, #tinymce.wiki-content a:focus, #tinymce.wiki-content a:hover, #tinymce.wiki-content a:active { color: #FF6600!important; }
#tinymce.wiki-content>p { word-wrap: break-word; }
#tinymce.wiki-content a.createlink { color: #6D1806 !important; }
#tinymce.wiki-content a.unresolved { color: #828282 !important; }
#tinymce.wiki-content a.not-permitted { color: #cc0000 !important; }
h1 a:link, h1 a:visited, h1 a:focus, h1 a:hover, h1 a:active { color: #333; border-bottom-color: #172B4D; }
.spacenametitle-printable, .spacenametitle-printable a, .spacenametitle-printable a:visited { color: #999999; }
.tableview th { color: #172B4D; border: 1px; border-bottom-color: #d1793f; }
.navBackgroundBox { background: #DFE1E6; color: #505F79; }
.previewBoxTop, .previewContent, .previewBoxBottom, .functionbox { border-color: #d1793f; }
.smalltext-blue { color: #d1793f; }
.tabnav, .comment .tabnav, ul.tabnav { border-bottom-color: #DFE1E6; }
.tabnav .tabs a { border-color: #DFE1E6; background: #DFE1E6; }
.tabnav .tabs a:link, .tabnav .tabs a:visited { color: #505F79; }
.tabnav .tabs a:hover { color: #ffffff; background: #172B4D; border-color: #172B4D; }
#squaretab a { border-color: #DFE1E6; }
#squaretab a:link, #squaretab a:visited { background-color: #DFE1E6; color: #505F79; }
#squaretab a:hover { color: #ffffff; background-color: #172B4D; border-color: #172B4D; }
table.blogcalendar { border-color: #d1793f; }
.blogcalendar th.calendarhead, a.calendarhead, a.calendarhead:link, a.calendarhead:visited, a.calendarhead:hover { background-color: #DFE1E6; color: #505F79; }
.searchGroupHeading { background-color: #DFE1E6; color: #505F79; }
.topBar { background-color: #ff6600; }
.basicPanelContainer { border-color: #DFE1E6; }
.greynavbar { border-top-color: #DFE1E6 }
div.license-personal { background-color: #ff6600; color: #505F79; }
div.license-personal a { color: #505F79; }
#header { background-color: #ff6600; }
#header a, #breadcrumbs { color: #ffffff; }
.breadcrumbs { border-color: #d1793f; }
.tab-navigation .tab a { background-color: #DFE1E6; border: 1px solid #DFE1E6; color: #505F79; }
.tab-navigation .tab a:hover { color: #ffffff; background-color: #172B4D; border-bottom-color: #172B4D; }
.tabletitle, .heading-text-color { color: #172B4D; }
ol.autocompleter li.focused { background: #F4F5F7; color: #ffffff; }
.diff-navigation a.version-navigation { background-color: #ddd; }
.diff-navigation a.version-navigation:hover { background-color: #bbb; }
.diff-navigation a.version-navigation.all:hover { background-color: transparent; }
.tasklist .task.complete .signoff { color: #008004; }
.tasklist .task.incomplete .signoff { color: #cc0000; }
#move-page-dialog .ui-tree li a.highlighted { background-color: #DFE1E6; color: #505F79; }
a:not(.aui-button,.aui-dialog2-header-close) { color: #0052CC; }
.aui-toolbar .aui-buttons .toolbar-item-link:hover button.toolbar-trigger, .aui-toolbar .aui-buttons .toolbar-item-link button.toolbar-trigger, .aui-navgroup-horizontal .aui-nav > li a, .aui-dialog .dialog-page-menu li.page-menu-item button.item-button, body.spaces .aui-tabs > .tabs-menu .menu-item a, body.spaces .aui-tabs > .tabs-menu .menu-item a:link, body.spaces .aui-tabs > .tabs-menu .menu-item a:visited { color: #0052CC; }
.aui-nav-vertical li.active a, .aui-nav-vertical li.active a:hover { color: #ffffff; background-color: #994208; }
#com-atlassian-confluence .aui-dd-parent .aui-dropdown .dropdown-item a, .aui-dropdown2 .aui-dropdown2-section li a { color: #663300; }
.aui-dialog .dialog-button-panel a.button-panel-link { color: #0052CC; }
.aui-button.aui-button-link { color: #0052CC; }
.aui-dropdown2-in-header.aui-style-default a, .aui-dropdown2-in-header.aui-style-default a:visited, .aui-dropdown2-in-header.aui-style-default a:link, .aui-dropdown2-in-header.aui-style-default:hover a, .aui-dropdown2-in-header.aui-style-default:hover a:visited, .aui-dropdown2-in-header.aui-style-default:hover a:link { color: #172B4D; }
.aui-dropdown2.aui-style-default:hover .aui-dropdown2-checkbox, .aui-dropdown2.aui-style-default:hover .aui-dropdown2-radio, .aui-dropdown2.aui-style-default:hover a { color: #663300; }
.aui-dropdown2.aui-style-default:hover a:not(.aui-dropdown2-disabled):focus, .aui-dropdown2.aui-style-default:hover a:not(.aui-dropdown2-disabled):hover, .aui-dropdown2.aui-style-default:hover a.active:not(.aui-dropdown2-disabled), .aui-dropdown2.aui-style-default:hover .aui-dropdown2-radio:not(.aui-dropdown2-disabled):hover { color: #ffffff; background-color: #994208; }
#com-atlassian-confluence .aui-dd-parent a.perms-dropdown-trigger:hover, #com-atlassian-confluence .aui-dd-parent a.perms-dropdown-trigger:focus, #com-atlassian-confluence .aui-dd-parent .aui-dropdown .dropdown-item.active a, .ajs-menu-bar .ajs-menu-item li.active a, .aui-dd-parent .aui-dropdown li.active, .ajs-menu-bar .ajs-menu-item.opened .ajs-drop-down li.active a, .ajs-content-hover .popup-follow a:hover { color: #ffffff; background-color: #994208; }
.ajs-menu-bar .ajs-menu-item.opened a.trigger { background-color: #F4F5F7; }
#header .aui-header { background-color: #ff6600; color: #ffffff; }
.aui-header .aui-dropdown2-trigger:hover, .aui-header .aui-dropdown2-trigger.active, #header .aui-header .aui-nav-link.active, #header .aui-header .aui-nav-imagelink.active, #header .aui-header .aui-nav-imagelink:focus, #header .aui-header .aui-nav-imagelink:hover, #header .aui-header a:focus, #header .aui-header a:hover, #header .aui-header a:active { background-color: #994208; border-color: #994208; color: #ffffff; }
.aui-header .aui-dropdown2-trigger.active::after, .aui-header .aui-dropdown2-trigger:hover::after { border-top-color: #ffffff; }
.aui-header .aui-dropdown2-trigger::after { border-top-color: #ffffff; }
.aui-header .aui-dropdown2-trigger, #header .aui-header .aui-nav-link, #header .aui-header .aui-nav-imagelink, #header .aui-header a { color: #ffffff; }
#header .aui-header .aui-dropdown2 { border-color: #ff6600; }
#header .aui-header .aui-dropdown2 li.separator { border-top-color: #ff6600; }
#header .aui-header .aui-dd-parent .aui-dropdown a:focus, #header .aui-header .aui-dd-parent .aui-dropdown a:hover, #header .aui-header .aui-dd-parent .aui-dropdown a:active, #header .aui-header .aui-dd-parent .aui-dropdown li.active a { color: #ffffff; background-color: #994208; }
#header .aui-header li.aui-nav a.aui-nav-link a { color: #172B4D; }
#app-switcher.aui-dropdown2.aui-style-default .active, .aui-dropdown2-trigger.app-switcher-trigger:hover, .aui-dropdown2.aui-style-default .active { background-color: #994208; color: #ffffff; }
#header .aui-header .aui-nav .aui-button-primary { background-color: #ba5009; color: #ffffff; }
#header .aui-header .aui-nav .aui-button-primary:hover, #header .aui-header .aui-nav .aui-button-primary:focus { filter: brightness(1.2); color: #ffffff; }
.aui-header .aui-quicksearch input[type='text'], .aui-header .aui-quicksearch input[type='text'][type='text']:focus { background: rgba(9, 30, 66, 0.48) }
.aui-header .aui-quicksearch:after, .aui-header .aui-quicksearch input[type='text'], .aui-header .aui-quicksearch input[type='text'][type='text']:focus { color: #DEEBFF; }
#header .aui-header .aui-nav .aui-button-primary:active { background-color: #ba5009; color: #ffffff; }
.aui-label { background-color: #F2F2F2; }
.tag-cloud .aui-label a:link, .tag-cloud .aui-label a:visited { color: #0052CC; }
`;

function injectCSS() {
    if (!document.querySelector('.wiki-content, .aui-header, #header, .acs-side-bar, .aui-nav-vertical')) {
        return; 
    }

    chrome.storage.sync.get(['colorMap', 'selectedFont'], (result) => {
        const colorMap = result.colorMap || {};
        const selectedFont = result.selectedFont || 'Arial, sans-serif';
        
        let finalCSS = cssTemplate;
        
        // Заменяем обычные цвета
        for (const [originalColor, newColor] of Object.entries(colorMap)) {
            if (originalColor.startsWith('__')) continue; // Пропускаем специальные ключи
            if (newColor && originalColor !== newColor) {
                const escapedColor = originalColor.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                const regex = new RegExp(escapedColor + '(?![0-9a-fA-F])', 'gi');
                finalCSS = finalCSS.replace(regex, newColor);
            }
        }
        
        // Получаем специальные цвета
        const bodyBg = colorMap['__body_bg__'] || '#ffffff';
        const headingColor = colorMap['__heading_color__'] || '#172B4D';
        const editorLinksColor = colorMap['__editor_links__'] || '#FF6600';
        const sidebarBg = colorMap['__sidebar_bg__'] || '#ffffff';
        
        // Определяем цвет текста в зависимости от темы
        const isDarkTheme = headingColor === '#ffffff' || headingColor === '#e2e8f0';
        const textColor = isDarkTheme ? '#e2e8f0' : '#172B4D';
        
        // Добавляем правила для фона страницы, заголовков, левого меню и редактора
        const specialCSS = `
            /* Фон страницы */
            body, html, .aui-page-panel, .aui-page-panel-content, .wiki-content, 
            #content, .page, .plugin-tabmeta, .ajs-dialog, .aui-dialog2-content,
            .aui-page-panel-inner, .contentLayout2, .confluence-dashboard {
                background-color: ${bodyBg} !important;
            }
            
            /* Цвет заголовков */
            h1, h2, h3, h4, h5, h6, 
            .wiki-content h1, .wiki-content h2, .wiki-content h3, 
            .wiki-content h4, .wiki-content h5, .wiki-content h6,
            .page-header-title, .aui-page-header-text, .content-text h1,
            .content-text h2, .content-text h3, .content-text h4,
            .content-text h5, .content-text h6 {
                color: ${headingColor} !important;
            }
            
            /* Основной текст страницы */
            body, .wiki-content, .aui-page-panel, p, span, div:not(.aui-button):not(button), li, td, th,
            .content-text, .page-body, .confluence-dashboard {
                color: ${textColor} !important;
            }
            
            /* ФОН ЛЕВОГО МЕНЮ (Sidebar) */
            .acs-side-bar, #acs-side-bar, .ia-secondary-container, 
            .aui-nav-vertical, .navigation-pseudo-link,
            .acs-side-bar-space, .acs-side-bar-footer,
            .ia-secondary-header, .ia-secondary-content {
                background-color: ${sidebarBg} !important;
            }
            
            /* Текст в левом меню */
            .acs-side-bar a, .ia-secondary-container a,
            .aui-nav-vertical li a, .navigation-pseudo-link {
                color: ${textColor} !important;
            }
            
            /* РЕДАКТОР (tinymce) - фон и текст */
            #tinymce.wiki-content, 
            .mce-content-body,
            .mce-edit-area,
            iframe.mce-edit-area,
            #tinymce,
            .wiki-content.mce-content-body,
            .mce-container-body {
                background-color: ${bodyBg} !important;
                color: ${textColor} !important;
            }
            
            /* Текст в редакторе */
            #tinymce.wiki-content p,
            #tinymce.wiki-content span,
            #tinymce.wiki-content div,
            #tinymce.wiki-content h1,
            #tinymce.wiki-content h2,
            #tinymce.wiki-content h3,
            #tinymce.wiki-content h4,
            #tinymce.wiki-content h5,
            #tinymce.wiki-content h6,
            #tinymce.wiki-content li,
            #tinymce.wiki-content td,
            #tinymce.wiki-content th {
                color: ${textColor} !important;
            }
            
            /* Заголовки в редакторе */
            #tinymce.wiki-content h1,
            #tinymce.wiki-content h2,
            #tinymce.wiki-content h3,
            #tinymce.wiki-content h4,
            #tinymce.wiki-content h5,
            #tinymce.wiki-content h6 {
                color: ${headingColor} !important;
            }
            
            /* ССЫЛКИ В РЕДАКТОРЕ */
            #tinymce.wiki-content a,
            #tinymce.wiki-content a:link,
            #tinymce.wiki-content a:visited,
            #tinymce.wiki-content a:focus,
            #tinymce.wiki-content a:hover,
            #tinymce.wiki-content a:active,
            .mce-content-body a,
            .mce-content-body a:link,
            .mce-content-body a:visited {
                color: ${editorLinksColor} !important;
            }
        `;
        
        finalCSS += specialCSS;
        
        // Шрифт
        const fontCSS = `
            body, .wiki-content, .aui-page-panel, .aui-header, .aui-page-header, 
            .aui-page-panel-item, .aui-nav, .aui-dropdown2, .aui-button,
            h1, h2, h3, h4, h5, h6, p, span, div, a, li, td, th, input, textarea, select,
            #tinymce.wiki-content, .mce-content-body {
                font-family: ${selectedFont} !important;
            }
        `;
        
        finalCSS += fontCSS;
        
        const existingStyle = document.getElementById('confluence-color-override');
        if (existingStyle) existingStyle.remove();
        
        const style = document.createElement('style');
        style.id = 'confluence-color-override';
        style.textContent = finalCSS;
        document.head.appendChild(style);
    });
}

injectCSS();

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'refreshCSS') {
        injectCSS();
    }
});

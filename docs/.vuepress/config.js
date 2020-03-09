const path = require('path');
module.exports = {
  title: 'Sciter优化文档',
  base:'/sciterDocs/',
  description: '基于原sciter文档的优化',
  head: [
    ['link', { rel: 'icon', href: '/logo.ico' }]
  ],
  serviceWorker: true,
  markdown: {
    lineNumbers: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname,'../../src'),
      }
    }
  },
  themeConfig: {
    nav: [ 
      {
        text: '文档',
        items: [
          { text: 'CSS', link: '/css/css_properties_map' },
          { text: 'Dom类', link: '/Dom/Element' },
          { text: '脚本(TIScript)', link: '/tiscript/tiscript_article' },
          { text: '脚本运行时', link: '/runtime/Global' },
          { text: '行为', link: '/js/buttonClass' },
          { text: '脚本库', link: '/store/Formation' },
          { text: '脚本(CSSS!)', link: '/js_csss/csss' },
          { text: '其他内容', link: '/other/standalone_Sciter_executable' },
          { text: '本地API', link: '/localApi/window' }
        ]
      }
    ],
    sidebar: {
      
      '/css/': [
        'css_properties_map',
        'selectors',
        'css_transition_sciter',
        'cssmap',
        'css_extensions',
        'css_variables_support',
        'image_map',
        'popup_position',
        'properties',
        'expandable_images',
        'css_media_queries',
        'flex_layout',
        'css_style_sets',
        'css_mixin_feature',
        'Components_React.js_style'
      ],
      '/Dom/': [
        'Element',
        'Node',
        'View',
        'Event',
        'Graphics',
        'Image',
        'Sciter',
        'Request',
        'Tokenizer',
        'CustomComponents',
      ],
      '/tiscript/': [
        'tiscript_article',
        'Syntax',
        'Types',
        'Expressions',
        'Statements',
        'Functions',
        'Classes',
        'Decorators',
        'promise',
        'Task',
        'Generators_and_yield',
        'Object_match_feature', 
        'sciter_script_hidden_treasures'
      ],
      '/runtime/': [
        'Global',
        'Object',
        'Array',
        'String',
        'Date',
        'Float',
        'Integer',
        'RegExp',
        'Color',
        'Length',
        'Angle',
        'Function',
        'Math',
        'Stream',
        'Bytes',
        'Error',
        'System',
        'System_Process',
        'Net_Socket',
        'Net_DataSocket',
        'Net_WebSocket',
        'VM',
        'XMLScanner',
        'Storage',
        'Key',
      ],
      
      '/js/': [
        'buttonClass',
        'editorClass',
        'selectorClass',
        'dateInput',
        'container',
        'output', 
        'menu'
      ],
      '/store/': [
        'Formation',
        'Lang',
        'plus',
        'q_doc'
      ],
      '/js_csss/': [
        'csss',
        'csss_events',
        'csss_calc_function',
        'csss_dom_object'
      ],
      '/other/': [
        'standalone_Sciter_executable',
        'HTML_Window',
        'window_frame_extended',
        'IAccessible_and_UI_automation_testing',
        'Context_menus',
        'Drag_and_Drop',
        'specific_tags',
        'behavior_prototype_aspect',
        'Better_CSS_sprites',
        'Caret_positions_in_HTML',
        'construction_mean_TIScript',
        'DOM_Inspector_how_remove_border_from_input',
        'frame_content_style',
        'new_TIScript_features',
        'Plus_for_Sciter',
        'plus_and_formation_what_the_difference',
        'Promises_A',
        'Sciter_3',
        'Sciter_UI_application_architecture',
        'Sciter_UI_basic_principles',
        'Sciter_on_multihead_system',
        'Sciter_HTML_parsing_flavour',
        'Sciter_video_support',
        'Theory_of_URL',
        'TIScript_syntax_compatible_with_CSS',
        'Use_of_CSS_constants_in_script',
        'visibility_none_article',
        'this_and_this_super_function_arguments',
        'pager_template_format',
        'task_await_feature',
        'Sciter_and_DirectX',
        'path_images_doc',
        'Localization',
        'Reusable_components',
        'collapsed_and_expanded_state',
        'event_handler_assignment',
        'sciter_for_AngularJS_practitioners',
        'upcomming_changes_in_4_1'
      ],
      '/localApi/': [
        'window'
      ]
    }
  }
}
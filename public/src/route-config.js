export function configRouter (router) {
  // normal routes
  router.map({
    '/vue-guide': {
      component: require('./views/vue-guide/index.vue'),
      subRoutes:{
        '/':{
          component:{
            template: '<p>This is Vue Guide index page.</p>'
          }
        },
        '/data-binding': {
          component: require('./views/vue-guide/data-binding.vue')
        },
        '/class-style-binding': {
          component: require('./views/vue-guide/class-style-binding.vue')
        },
        '/conditional-rendering': {
          component: require('./views/vue-guide/conditional-rendering.vue')
        },
        '/list-rendering': {
          component: require('./views/vue-guide/list-rendering.vue')
        },
        '/methods-event-handling': {
          component: require('./views/vue-guide/methods-event-handling.vue')
        },
        '/form-input-bindings': {
          component: require('./views/vue-guide/form-input-bindings.vue')
        },
        '/transitions': {
          component: require('./views/vue-guide/transitions.vue')
        }
      }
    },
    '/list': {
      name:'list',
      component: require('./views/list.vue')
    },
    '/detail/:id': {
      name: 'detail',
      component: require('./views/detail.vue')
    },
    '/new-topic': {
      component: require('./views/new-topic.vue')
    },
    '/register': {
      component: require('./views/register.vue')
    },
    '/message/:messageId': {
      component: require('./views/message.vue')
    },
    '/user/:userId': {
      component: require('./views/user/index.vue'),
      subRoutes: {
        '/': {
          // inline component
          component: {
            template: 'default yo'
          }
        },
        // matches "/user/:userId/profile/:something"
        'profile/:something': {
          component: require('./views/user/profile.vue')
        },
        // matches "/user/:userId/posts"
        'posts': {
          component: require('./views/user/posts.vue')
        },
        // matches "/user/:userId/settings"
        'settings': {
          component: require('./views/user/settings.vue')
        }
      }
    },
    '/test': {
      name:'test',
      component: require('./views/test.vue')
    },
    '*': {
      component: require('./components/not-found.vue')
    }
  })

  // redirect
  router.redirect({
    '/info': '/about',
    '/hello/:userId': '/user/:userId'
  })

  // global before
  // 3 options:
  // 1. return a boolean
  // 2. return a Promise that resolves to a boolean
  // 3. call transition.next() or transition.abort()
  router.beforeEach((transition) => {
    if (transition.to.path === '/forbidden') {
      router.app.authenticating = true
      setTimeout(() => {
        router.app.authenticating = false
        alert('this route is forbidden by a global before hook')
        transition.abort()
      }, 3000)
    } else {
      transition.next()
    }
  })
}

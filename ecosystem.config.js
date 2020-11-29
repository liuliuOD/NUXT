module.exports = {
  apps : [{
    name: 'liuliu_nuxt',
    script: './node_modules/nuxt-start/bin/nuxt-start.js',
    instances: 'max',
    // exec_mode: '',
    max_memory_restart: '1G',
    port: 3010,
    watch: '.'
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};

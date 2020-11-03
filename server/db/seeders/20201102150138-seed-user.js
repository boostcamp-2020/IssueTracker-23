module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'user',
      [
        {
          id: 'test_id1',
          password: 'passwd1',
          user_name: 'tester1',
          profile_url:
            'https://github.githubassets.com/images/modules/logos_page/Octocat.png',
          oauth_type: 'github',
          created_at: '2020-11-03 00:30:00',
          updated_at: '2020-11-03 00:30:00',
        },
        {
          id: 'test_id2',
          password: 'passwd2',
          user_name: 'tester2',
          profile_url: 'https://octodex.github.com/images/femalecodertocat.png',
          oauth_type: null,
          created_at: '2020-11-03 00:30:00',
          updated_at: '2020-11-03 00:30:00',
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('user', null, {});
  },
};

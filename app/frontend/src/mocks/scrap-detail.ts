import type { ScrapDetailData } from '../features/scraps/types'

export const scrapDetailData: ScrapDetailData = {
  post: {
    author: {
      name: 'Kenji Sato',
      handle: '@kenji_sato',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAIiBPgMsZksHx4TO3tGIOJ4iMxYBbGabB-RBvG2sXXAXKyl6ZaTrVRDM5UVwK7Fa9qtVwDg1Q15aJygpn5zmPOxbYYIo8vb3gU6OXNTvR_iASYqb6JlmHkYlFGCmAWkfAjOhMTKmGOWIy5bD75CZTAbenkY_R33NM92aOZ7uI_7HVr4NjQHgGb_GZK76za4v88l6k_GlpGnav7cjf0_K_DAG6OSmWSfxPlN1nF7_yo8hbfsuX6MZ3XIjWgntUtsujHx4XUboxHTbKb',
    },
    text: [
      'Java課題の締切を知っている人いますか？ #CS101',
      'ユニットテストで何か重要なことを見落としている気がします。😅',
    ],
    timeLabel: '10:42 AM · 2023年10月24日',
    likes: 12,
    comments: 4,
  },
  replies: [
    {
      id: 'reply-1',
      author: {
        name: 'Yuki Tanaka',
        handle: '@yuki_t',
        avatar:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAvhQcsJCtpogA351mToT4dQ_jBnCXLs4Q_tm_37zvERG-XV6vqZn6VR9ecxkSvUgQ9lqM202vpJp2aCu4P-BEi93j5fTxNaTE70K_JJ5MHyCg0-XCYh_CAc7Bx9UuOq30sJ9NUquaVpm7jBSclOM9PE4Z_1ToWKH_-6pSOe_99AncsR2E8_AUXkA4b8dfXe-hC5U_oTtW_Fsuk5TiMzclDmO8pv0JRTb72_5wQmiGjYgbp_dG2FOzftu6_LnwZsaItFT_pOfMeZbLE',
      },
      time: '15m',
      text: '来週火曜の23:59が締切だよ！LMSのお知らせ見てね。採点ルーブリックも昨日更新されたよ。',
      likes: 5,
      comments: 1,
    },
    {
      id: 'reply-2',
      author: {
        name: 'Alex M.',
        handle: '@alex_m',
        avatar:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDtaoDU0KEuCJ7mCpinOIK349dPCLhsbtrQXPDzZceq1pvmRLw-1lzHMxjt64Y8VqWl3VG0NIfL-oCiYNKBqtMVBTtcg66iA8veFv69HG9Hl-pVcQ66LzYrujeOlJg_VZ6-0eIJBDb5vdXTX8uJl2FX24K9ragumwoijrDv6enY0Vdr_c8emVCaYFqFcjuewmTwfoWQKW14qgbDZRaagkHHodezvKd6RIm3SLUxaB_s7Dk7WWMA9YzgquRpaGVv57dHwKKF3Ek5XXTM',
      },
      time: '10m',
      text: 'えっ、ドラフト提出の時はユニットテスト任意じゃなかったっけ？😱',
      likes: 2,
      comments: 3,
    },
    {
      id: 'reply-3',
      author: {
        name: 'Yuki Tanaka',
        handle: '@yuki_t',
        avatar:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAvhQcsJCtpogA351mToT4dQ_jBnCXLs4Q_tm_37zvERG-XV6vqZn6VR9ecxkSvUgQ9lqM202vpJp2aCu4P-BEi93j5fTxNaTE70K_JJ5MHyCg0-XCYh_CAc7Bx9UuOq30sJ9NUquaVpm7jBSclOM9PE4Z_1ToWKH_-6pSOe_99AncsR2E8_AUXkA4b8dfXe-hC5U_oTtW_Fsuk5TiMzclDmO8pv0JRTb72_5wQmiGjYgbp_dG2FOzftu6_LnwZsaItFT_pOfMeZbLE',
      },
      time: '5m',
      text: '@alex_m ドラフトは任意だけど、最終提出では20%の配点だよ。',
      likes: 8,
      comments: 0,
    },
    {
      id: 'reply-4',
      author: {
        name: 'Kenji Sato',
        handle: '@kenji_sato',
        avatar:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAIiBPgMsZksHx4TO3tGIOJ4iMxYBbGabB-RBvG2sXXAXKyl6ZaTrVRDM5UVwK7Fa9qtVwDg1Q15aJygpn5zmPOxbYYIo8vb3gU6OXNTvR_iASYqb6JlmHkYlFGCmAWkfAjOhMTKmGOWIy5bD75CZTAbenkY_R33NM92aOZ7uI_7HVr4NjQHgGb_GZK76za4v88l6k_GlpGnav7cjf0_K_DAG6OSmWSfxPlN1nF7_yo8hbfsuX6MZ3XIjWgntUtsujHx4XUboxHTbKb',
      },
      time: '2m',
      text: '@yuki_t ありがとう！パニック解除。😂',
      likes: 1,
      comments: 0,
    },
  ],
}

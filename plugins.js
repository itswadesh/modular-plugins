const stringManip = (s) => {
  let strArr = s.split('-')
  for (let i = 1; i < strArr.length; i++) {
    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1)
  }

  s = strArr.join('')
  return s
}

const PLUGIN_TEMPLATES = [
  {
    name: 'Cookie Bot',
    code: 'cookie-bot',
    short_description: 'Make your store GDPR/ePR and CCPA compliant',
    inputs: { active: { type: 'boolean', name: 'Enable' } },
  },
  {
    name: 'Import Export',
    code: 'import-export',
    short_description: 'Import Export',
    inputs: { active: { type: 'boolean', name: 'Enable' } },
  },
  {
    name: 'Discount Coupons',
    code: 'coupons',
    short_description: 'Discount Coupons',
    inputs: { active: { type: 'boolean', name: 'Enable' } },
  },
  {
    name: 'Deals',
    code: 'deals',
    short_description: 'Deals',
    inputs: { active: { type: 'boolean', name: 'Enable' } },
  },
  {
    name: 'Product Reviews and Ratings',
    code: 'product-reviews-and-ratings',
    short_description:
      'Collect and showcase reviews to build trust and boost sales',
    inputs: { active: { type: 'boolean', name: 'Enable' } },
  },
  {
    name: 'Digital Products',
    code: 'digital-products',
    short_description: 'Enable Digital products on your store',
    inputs: { active: { type: 'boolean', name: 'Enabled' } },
  },
  {
    name: 'Whatsapp Chat Button',
    code: 'whatsapp-chat-button',
    short_description: 'Whatsapp Chat Button',
    inputs: {
      phone: { type: 'string', name: 'Phone Number' },
      active: { type: 'boolean', name: 'Active' },
    },
  },
  {
    name: 'Wishlist',
    code: 'wishlist',
    short_description: 'Wishlist',
    inputs: { active: { type: 'boolean', name: 'Active' } },
  },
  {
    name: 'Jewelry Commerce',
    code: 'jewelry-commerce',
    short_description: 'Jewelry Commerce',
    inputs: { active: { type: 'boolean', name: 'Active' } },
  },
  {
    name: 'Product Customizer',
    code: 'product-customizer',
    short_description: 'Product Customizer',
    inputs: { active: { type: 'boolean', name: 'Active' } },
  },
  {
    name: 'FNB',
    code: 'fnb',
    short_description: 'Food & Beverages',
    inputs: { active: { type: 'boolean', name: 'Active' } },
  },
  {
    name: 'Tags',
    code: 'tags',
    short_description: 'Tags',
    inputs: { active: { type: 'boolean', name: 'Active' } },
  },
  {
    name: 'Store Close',
    code: 'store-close',
    short_description: 'Option to open & close store with message',
    inputs: {
      active: { type: 'boolean', name: 'Active' },
      message: { type: 'text', name: 'Text' },
    },
  },
  {
    name: 'Store Timings',
    code: 'store-timings',
    short_description: 'Setup Store Open Close Timings',
    inputs: {
      active: { type: 'boolean', name: 'Active' },
      message: { type: 'text', name: 'Text' },
    },
  },
  {
    name: 'Secure Catalogue',
    code: 'secure-catalogue',
    short_description: 'Login required to view catalogue',
    inputs: { active: { type: 'boolean', name: 'Active' } },
  },
  {
    name: 'Short Codes',
    code: 'short-codes',
    short_description: 'Enable short code insertion into product description',
    inputs: { active: { type: 'boolean', name: 'Active' } },
  },
  {
    name: 'Multi Vendor',
    code: 'multi-vendor',
    short_description: 'Enable multi-vendor feature',
    inputs: { active: { type: 'boolean', name: 'Active' } },
  },
  {
    name: 'Bulk Order Enquiry',
    code: 'bulk-order',
    short_description: 'Add Bulk Order Enquiry option to store',
    inputs: { active: { type: 'boolean', name: 'Active' } },
  },
  {
    name: 'Sitemap',
    code: 'sitemap',
    short_description: 'Generate sitemap for products, categories, blog, pages',
    inputs: { active: { type: 'boolean', name: 'Active' } },
  },
  {
    name: 'Abandonned Cart',
    code: 'abandonned-cart',
    short_description: 'Handle abandonned cart',
    inputs: { active: { type: 'boolean', name: 'Active' } },
  },
  {
    name: 'Product Feeds',
    code: 'product-feeds',
    short_description: 'Generate Product Feeds',
    inputs: { active: { type: 'boolean', name: 'Active' } },
  },
  {
    name: 'Store Promo Video',
    code: 'store-promo-video',
    short_description: 'Add URL of store promotion to build authority',
    inputs: {
      active: { type: 'boolean', name: 'Active' },
      url: { type: 'string', name: 'url' },
    },
  },
  {
    name: 'Hello Bar',
    code: 'hello-bar',
    short_description: 'Hello bar',
    inputs: {
      active: { type: 'boolean', name: 'Active' },
      content: { type: 'richtext', name: 'Content' },
    },
  },
  {
    name: 'Social Sharing Buttons',
    code: 'social-sharing-buttons',
    short_description: 'Social Sharing Buttons',
    inputs: {
      active: { type: 'boolean', name: 'Enable' },
      telegram: { type: 'string', name: 'Telegram' },
      whatsapp: { type: 'string', name: 'Whatsapp' },
      facebook: { type: 'string', name: 'Facebook' },
      twitter: { type: 'string', name: 'Twitter' },
      linkedin: { type: 'string', name: 'Linkedin' },
      reddit: { type: 'string', name: 'Reddit' },
      instagram: { type: 'string', name: 'Instagram' },
      snapchat: { type: 'string', name: 'Youtube' },
      pinterest: { type: 'string', name: 'Youtube' },
      youtube: { type: 'string', name: 'Youtube' },
    },
  },
  {
    name: 'Google Analytics',
    code: 'google-analytics',
    short_description: 'Google Analytics',
    inputs: {
      active: { type: 'boolean', name: 'Enable' },
      id: { type: 'text', name: 'Analytics ID' },
    },
  },
  {
    name: 'Digital Products',
    code: 'digital-products',
    short_description: 'Digital Products',
    inputs: { active: { type: 'boolean', name: 'Enable' } },
  },
  {
    name: 'Google Tag Manager',
    code: 'google-tag-manager',
    short_description: 'Google Tag Manager',
    inputs: {
      active: { type: 'boolean', name: 'Enable' },
      id: { type: 'text', name: 'GTM ID' },
    },
  },
  {
    name: 'Live Streaming',
    code: 'live-streaming',
    short_description: 'Live Streaming',
    inputs: { active: { type: 'boolean', name: 'Enable' } },
  },
  {
    name: 'Facebook Pixel',
    code: 'facebook-pixel',
    short_description: 'Facebook Pixel',
    inputs: {
      active: { type: 'boolean', name: 'Enable' },
      id: { type: 'text', name: 'Pixel ID' },
    },
  },
]
const plugins = [
  {
    _id: '646861a9f3dbaab94574dd88',
    code: 'coupons',
    active: true,
    store: '6356502aca4ff28ed596cb1b',
    user: '5ed14b669e8b394b6f8967ce',
    inputs: { active: { type: 'boolean', val: true } },
  },
  {
    _id: '64646d9ec52a43a64e87bc8a',
    code: 'facebook-pixel',
    active: true,
    store: '6356502aca4ff28ed596cb1b',
    user: '5ed14b669e8b394b6f8967ce',
    inputs: { id: { type: 'text', name: 'Pixel ID', val: '' } },
  },
  {
    _id: '6468a4b51cbbecce06275793',
    code: 'hello-bar',
    active: true,
    store: '6356502aca4ff28ed596cb1b',
    user: '5ed14b669e8b394b6f8967ce',
    inputs: {
      active: { type: 'boolean', val: false },
      content: {
        type: 'richtext',
        val: '<p>Welcome to the store...have a great time.</p>',
      },
    },
  },
  {
    _id: '646b891c5e0dd856d483a1f1',
    code: 'import-export',
    active: true,
    store: '6356502aca4ff28ed596cb1b',
    user: '5ed14b669e8b394b6f8967ce',
    inputs: { active: { type: 'boolean', val: true } },
  },
  {
    _id: '6474722ce428e9e8fc2fa23a',
    code: 'jewelry-commerce',
    active: true,
    store: '6356502aca4ff28ed596cb1b',
    user: '5ed14b669e8b394b6f8967ce',
    inputs: { active: { type: 'boolean', val: true } },
  },
  {
    _id: '6468ac8c1cbbecce062759ca',
    code: 'social-sharing-buttons',
    active: true,
    store: '6356502aca4ff28ed596cb1b',
    user: '5ed14b669e8b394b6f8967ce',
    inputs: {
      telegram: { type: 'string', val: 'https://t.me/itswadesh' },
      whatsapp: { type: 'string', val: '8249028220' },
      facebook: { type: 'string', val: 'https://www.facebook.com/litekart' },
      twitter: { type: 'string', val: 'https://twitter.com/misikitech' },
      linkedin: {
        type: 'string',
        val: 'https://www.linkedin.com/company/misiki/',
      },
      reddit: { type: 'string', val: 'https://www.reddit.com/user/itswadesh/' },
      instagram: { type: 'string', val: 'https://www.instagram.com/litekart/' },
      youtube: { type: 'string', val: 'https://www.youtube.com/@litekart' },
    },
  },
]

for (let p of PLUGIN_TEMPLATES) {
  const foundPlugin = plugins.find((e) => e.code == p.code)
  // console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzz', p)
  let r = !!p.inputs?.active?.val

  if (p.code === 'hello-bar') {
    r = p?.inputs
    const s = stringManip(p.code)
    if (foundPlugin) {
      store[s] = r
    }
  } else if (p.code === 'store-promo-video') {
    store.storePromoVideo = p?.inputs?.url?.val
  } else if (p.code === 'store-close') {
    store.isStoreClosed = !!p?.inputs?.active?.val
    store.storeCloseMessage = p?.inputs?.message?.val || 'Store Closed'
  } else if (p.code === 'social-sharing-buttons') {
    store.facebookUrl = p?.inputs?.facebook?.val
    store.instagramUrl = p?.inputs?.instagram?.val
    store.linkedinUrl = p?.inputs?.linkedin?.val
    store.pinterestUrl = p?.inputs?.pinterest?.val
    store.redditUrl = p?.inputs?.reddit?.val
    store.snapChatPixel = p?.inputs?.snapchat?.val
    store.telegramUrl = p?.inputs?.telegram?.val
    store.twitterUrl = p?.inputs?.twitter?.val
    store.youtubeUrl = p?.inputs?.youtube?.val
    store.whatsappPhoneNumber = p?.inputs?.whatsapp?.val
  }
  const s = stringManip(p.code)

  if (foundPlugin) {
    store[s] = !!r
  } else {
    store[s] = false
  }
}

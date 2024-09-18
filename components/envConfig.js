import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const {
    NEXT_PUBLIC_APPSTORE_APP,
    NEXT_PUBLIC_PLAYSTORE_APP,
    NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_KEY
} = publicRuntimeConfig;

export {
    NEXT_PUBLIC_APPSTORE_APP,
    NEXT_PUBLIC_PLAYSTORE_APP,
    NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_KEY
}
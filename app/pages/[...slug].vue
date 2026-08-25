<template>
  <div />
</template>

<script setup>
// Catch-all route: silently redirect all unknown paths to the 404 page.
// This prevents Vue Router "No match found" warnings caused by bots and
// scanners probing paths like /sitemap.xml, /.git/config, /wp-login.php, etc.
throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true });
</script>

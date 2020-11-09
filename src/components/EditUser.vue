<template>
  <div>
    <p>
      EDIT USER!!
    </p>
    <p> ID FROM PARAMS {{ $route.params.id }} </p>
    <p>QUERYY: {{$route.query.lang}}</p>
  </div>
</template>

<script>
export default {
  name: 'EditUser'
}
</script>

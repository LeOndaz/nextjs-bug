
class MyApi {
  async getInstance () {
    if (typeof window === 'undefined') {
      return import("@/serverUtils").then(r => r.myServerFuncForSupabaseInstance());
    }
    
    return import("@/clientUtils").then(r => r.myClientFuncForSupabaseInstance())
  }
}

export default MyApi;
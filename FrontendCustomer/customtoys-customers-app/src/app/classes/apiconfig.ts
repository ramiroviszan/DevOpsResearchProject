export class Apiconfig {
    private static ApiIP: string = "localhost";
    private static ApiPort: string = "8000";
  
    public static getIP() : string {
      return this.ApiIP;
    }
  
    public static getPort() : string {
      return this.ApiPort;
    }
  }
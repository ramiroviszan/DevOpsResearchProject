export class Apiconfig {
    private static ApiIP: string = "app-obli-devops-backend.herokuapp.com";
    private static ApiProtocol: string = "https://";
    private static ApiPort: string = "80";
  
    public static getIP() : string {
      return this.ApiIP;
    }
  
    public static getPort() : string {
      return this.ApiPort;
    }

    public static getProtocol() : string {
      return this.ApiProtocol;
    }
  }
export class Apiconfig {
    private static ApiIP: string = "test-node-angular.herokuapp.com"; //"app-obli-devops-backend.herokuapp.com";
    private static ApiProtocol: string = "https://";
    private static ApiPort: string = ""; //:4100
  
    private static ApiStartUri = "front/";

    public static getIP() : string {
      return this.ApiIP;
    }
  
    public static getPort() : string {
      return this.ApiPort;
    }

    public static getProtocol() : string {
      return this.ApiProtocol;
    }

    public static getApiStartUri() : string {
      return this.ApiStartUri;
    }
  }
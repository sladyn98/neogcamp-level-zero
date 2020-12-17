export const creatingJson = [
  {
    id: "1",
    command: "kubectl apply -f ./my-manifest.yaml",
    description: "create resource"
  },
  {
    id: "2",
    command: "kubectl apply -f https://git.io/vPieo",
    description: "create resource(s) from url"
  },
  {
    id: "3",
    command: "kubectl create deployment nginx --image=nginx",
    description: "start a single instance of nginx"
  }
];

export const viewingJson = [
  {
    id: "1",
    command: "kubectl get services",
    description: "List all services in the namespace"
  },
  {
    id: "2",
    command: "kubectl get pods --all-namespaces",
    description: "List all pods in all namespaces"
  },
  {
    id: "3",
    command: "kubectl get pods -o wide",
    description: "List all pods in the current namespace, with more details"
  },
  {
    id: "4",
    command: "kubectl get pod my-pod -o yaml",
    description: "Get a pods yaml"
  }
];

export const scalingJson = [
  {
    id: "1",
    command: "kubectl scale --replicas=3 rs/foo",
    description: "Scale a replicaset named 'foo' to 3"
  },
  {
    id: "2",
    command: "kubectl scale --replicas=3 -f foo.yaml",
    description: "Scale a resource specified in foo.yaml to 3"
  },
  {
    id: "3",
    command: "kubectl scale --current-replicas=2 --replicas=3 deployment/mysql",
    description:
      "If the deployment named mysql's current size is 2, scale mysql to 3"
  },
  {
    id: "4",
    command: "kubectl scale --replicas=5 rc/foo rc/bar rc/baz",
    description: "Scale multiple replication controllers"
  }
];

export const deletingJson = [
  {
    id: "1",
    command: "kubectl delete -f ./pod.json",
    description: "Delete a pod using the type and name specified in pod.json"
  },
  {
    id: "2",
    command: "kubectl delete pod,service baz foo",
    description: "Delete pods and services with same names baz and foo"
  }
];

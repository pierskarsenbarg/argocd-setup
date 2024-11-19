import * as pulumi from "@pulumi/pulumi";
import * as k8s from "@pulumi/kubernetes";

const ns = new k8s.core.v1.Namespace("argocdns", {
    metadata: {
        name: "argocd",
    },
});

const provider = new k8s.Provider("provider", {
    namespace: "argocd",
});

const argosetup = new k8s.yaml.v2.ConfigFile(
    "yaml",
    {
        file: "./argocd-setup.yaml",
    },
    { provider },
);

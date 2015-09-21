{
   "swagger": "2.0",
   "info": {
      "title": "magnum",
      "version": "1.0"
   },
   "consumes": [
      "application/json"
   ],
   "produces": [
      "application/json"
   ],
   "paths": {
      "/baymodels": {
         "get": {
            "description": "Retrieve a list of bay models",
            "responses": {
               "200": {
                  "description": "A collection of bay models",
                  "schema": {
                     "type": "array",
                     "items": {
                        "description": "Represents an existing bay model",
                        "allOf": [
                           {
                              "type": "object",
                              "description": "Represents a new bay model about to be created",
                              "required": [
                                 "coe",
                                 "image_id",
                                 "keypair_id"
                              ],
                              "properties": {
                                 "name": {
                                    "type": "string",
                                    "description": "The name of the bay model",
                                    "minLength": 1,
                                    "maxLength": 255
                                 },
                                 "coe": {
                                    "type": "string",
                                    "description": "The Container Orchestration Engine for this bay model",
                                    "minLength": 1,
                                    "maxLength": 255
                                 },
                                 "image_id": {
                                    "type": "string",
                                    "description": "The image name or UUID to use as a base image for this baymodel",
                                    "minLength": 1,
                                    "maxLength": 255
                                 },
                                 "flavor_id": {
                                    "type": "string",
                                    "description": "The flavor of this bay model",
                                    "minLength": 1,
                                    "maxLength": 255
                                 },
                                 "master_flavor_id": {
                                    "type": "string",
                                    "description": "The flavor of the master node for this bay model",
                                    "minLength": 1,
                                    "maxLength": 255
                                 },
                                 "dns_nameserver": {
                                    "type": "string",
                                    "description": "The flavor of the master node for this bay model",
                                    "format": "ipv4"
                                 },
                                 "keypair_id": {
                                    "description": "The name or id of the nova ssh keypair",
                                    "type": "string",
                                    "minLength": 1,
                                    "maxLength": 255
                                 },
                                 "external_network_id": {
                                    "description": "The external network to attach the Bay",
                                    "type": "string",
                                    "minLength": 1,
                                    "maxLength": 255
                                 },
                                 "fixed_network": {
                                    "description": "The fixed network name to attach the Bay",
                                    "type": "string",
                                    "minLength": 1,
                                    "maxLength": 255
                                 },
                                 "apiserver_port": {
                                    "description": "The API server port for k8s",
                                    "type": "integer",
                                    "minimum": 1024,
                                    "maximum": 65535
                                 },
                                 "docker_volume_size": {
                                    "description": "The size in GB of the docker volume",
                                    "type": "integer",
                                    "minimum": 1
                                 },
                                 "ssh_authorized_key": {
                                    "description": "The SSH Authorized Key",
                                    "type": "string",
                                    "minLength": 1
                                 },
                                 "cluster_distro": {
                                    "description": "The Cluster distro for the bay, ex - coreos, fedora-atomic.",
                                    "type": "string",
                                    "minLength": 1,
                                    "maxLength": 255
                                 },
                                 "http_proxy": {
                                    "description": "http_proxy for the bay",
                                    "type": "string",
                                    "minLength": 1,
                                    "maxLength": 255
                                 },
                                 "https_proxy": {
                                    "description": "https_proxy for the bay",
                                    "type": "string",
                                    "minLength": 1,
                                    "maxLength": 255
                                 },
                                 "no_proxy": {
                                    "description": "Its comma separated list of IP addresses for which proxies should not used in the bay",
                                    "type": "string",
                                    "minLength": 1,
                                    "maxLength": 255
                                 }
                              }
                           },
                           {
                              "type": "object",
                              "properties": {
                                 "uuid": {
                                    "type": "string",
                                    "description": "Unique UUID for this baymodel",
                                    "format": "uuid"
                                 },
                                 "updated_at": {
                                    "description": "The date and time when the entity was last updated",
                                    "type": "string",
                                    "format": "datetime"
                                 },
                                 "links": {
                                    "description": "A list containing a self link and associated baymodel links",
                                    "type": "array",
                                    "items": {
                                       "type": "object",
                                       "properties": {
                                          "href": {
                                             "type": "string",
                                             "description": "The url of a link."
                                          },
                                          "rel": {
                                             "type": "string",
                                             "description": "The name of a link."
                                          },
                                          "type": {
                                             "type": "string",
                                             "description": "Indicates the type of document/link."
                                          }
                                       }
                                    }
                                 },
                                 "created_at": {
                                    "description": "The date and time when the entity was created",
                                    "type": "string",
                                    "format": "datetime"
                                 }
                              }
                           }
                        ]
                     }
                  },
                  "examples": {
                     "application/json": {
                        "baymodels": [
                           {
                              "uuid": "27e3153e-d5bf-4b7e-b517-fb518e17f34c",
                              "name": "example",
                              "image_id": "Fedora-k8s",
                              "apiserver_port": 8080,
                              "coe": "kubernetes"
                           }
                        ]
                     }
                  }
               }
            },
            "parameters": []
         }
      },
      "/baymodels/detail": {
         "get": {
            "description": "Retrieve a list of baymodels with detailed information",
            "responses": {
               "200": {
                  "description": "A collection of bay models with detailed information",
                  "schema": {
                     "type": "array",
                     "items": {
                        "description": "Represents an existing bay model",
                        "allOf": [
                           {
                              "type": "object",
                              "description": "Represents a new bay model about to be created",
                              "required": [
                                 "coe",
                                 "image_id",
                                 "keypair_id"
                              ],
                              "properties": {
                                 "name": {
                                    "type": "string",
                                    "description": "The name of the bay model",
                                    "minLength": 1,
                                    "maxLength": 255
                                 },
                                 "coe": {
                                    "type": "string",
                                    "description": "The Container Orchestration Engine for this bay model",
                                    "minLength": 1,
                                    "maxLength": 255
                                 },
                                 "image_id": {
                                    "type": "string",
                                    "description": "The image name or UUID to use as a base image for this baymodel",
                                    "minLength": 1,
                                    "maxLength": 255
                                 },
                                 "flavor_id": {
                                    "type": "string",
                                    "description": "The flavor of this bay model",
                                    "minLength": 1,
                                    "maxLength": 255
                                 },
                                 "master_flavor_id": {
                                    "type": "string",
                                    "description": "The flavor of the master node for this bay model",
                                    "minLength": 1,
                                    "maxLength": 255
                                 },
                                 "dns_nameserver": {
                                    "type": "string",
                                    "description": "The flavor of the master node for this bay model",
                                    "format": "ipv4"
                                 },
                                 "keypair_id": {
                                    "description": "The name or id of the nova ssh keypair",
                                    "type": "string",
                                    "minLength": 1,
                                    "maxLength": 255
                                 },
                                 "external_network_id": {
                                    "description": "The external network to attach the Bay",
                                    "type": "string",
                                    "minLength": 1,
                                    "maxLength": 255
                                 },
                                 "fixed_network": {
                                    "description": "The fixed network name to attach the Bay",
                                    "type": "string",
                                    "minLength": 1,
                                    "maxLength": 255
                                 },
                                 "apiserver_port": {
                                    "description": "The API server port for k8s",
                                    "type": "integer",
                                    "minimum": 1024,
                                    "maximum": 65535
                                 },
                                 "docker_volume_size": {
                                    "description": "The size in GB of the docker volume",
                                    "type": "integer",
                                    "minimum": 1
                                 },
                                 "ssh_authorized_key": {
                                    "description": "The SSH Authorized Key",
                                    "type": "string",
                                    "minLength": 1
                                 },
                                 "cluster_distro": {
                                    "description": "The Cluster distro for the bay, ex - coreos, fedora-atomic.",
                                    "type": "string",
                                    "minLength": 1,
                                    "maxLength": 255
                                 },
                                 "http_proxy": {
                                    "description": "http_proxy for the bay",
                                    "type": "string",
                                    "minLength": 1,
                                    "maxLength": 255
                                 },
                                 "https_proxy": {
                                    "description": "https_proxy for the bay",
                                    "type": "string",
                                    "minLength": 1,
                                    "maxLength": 255
                                 },
                                 "no_proxy": {
                                    "description": "Its comma separated list of IP addresses for which proxies should not used in the bay",
                                    "type": "string",
                                    "minLength": 1,
                                    "maxLength": 255
                                 }
                              }
                           },
                           {
                              "type": "object",
                              "properties": {
                                 "uuid": {
                                    "type": "string",
                                    "description": "Unique UUID for this baymodel",
                                    "format": "uuid"
                                 },
                                 "updated_at": {
                                    "description": "The date and time when the entity was last updated",
                                    "type": "string",
                                    "format": "datetime"
                                 },
                                 "links": {
                                    "description": "A list containing a self link and associated baymodel links",
                                    "type": "array",
                                    "items": {
                                       "type": "object",
                                       "properties": {
                                          "href": {
                                             "type": "string",
                                             "description": "The url of a link."
                                          },
                                          "rel": {
                                             "type": "string",
                                             "description": "The name of a link."
                                          },
                                          "type": {
                                             "type": "string",
                                             "description": "Indicates the type of document/link."
                                          }
                                       }
                                    }
                                 },
                                 "created_at": {
                                    "description": "The date and time when the entity was created",
                                    "type": "string",
                                    "format": "datetime"
                                 }
                              }
                           }
                        ]
                     }
                  },
                  "examples": {
                     "application/json": {
                        "baymodels": [
                           {
                              "uuid": "27e3153e-d5bf-4b7e-b517-fb518e17f34c",
                              "name": "example",
                              "image_id": "Fedora-k8s",
                              "flavor_id": "m1.small",
                              "master_flavor_id": "m1.small",
                              "dns_nameserver": "8.8.1.1",
                              "keypair_id": "keypair1",
                              "external_network_id": "ffc44e4a-2319-4062-bce0-9ae1c38b05ba",
                              "fixed_network": "private",
                              "apiserver_port": 8080,
                              "docker_volume_size": 25,
                              "cluster_distro": "fedora-atomic",
                              "ssh_authorized_key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAB",
                              "coe": "kubernetes",
                              "http_proxy": "http://proxy.com:123",
                              "https_proxy": "https://proxy.com:123",
                              "no_proxy": "192.168.0.1,192.168.0.2,192.168.0.3",
                              "created_at": "2015-09-04 10:44:40.885958",
                              "updated_at": "2015-09-04 10:44:40.885958"
                           }
                        ]
                     }
                  }
               },
               "default": {
                  "description": "An unexpected error occurred"
               }
            },
            "parameters": [
               {
                  "name": "baymodel_uuid",
                  "in": "query",
                  "description": "Allows filtering the collection according to UUID",
                  "type": "string",
                  "format": "uuid"
               },
               {
                  "name": "marker",
                  "in": "query",
                  "description": "The UUID of the resource to start the collection from.",
                  "type": "string",
                  "format": "uuid"
               },
               {
                  "name": "limit",
                  "in": "query",
                  "description": "Maximum number of resources to return in a single result",
                  "type": "integer"
               },
               {
                  "name": "sortKey",
                  "in": "query",
                  "description": "Column to sort results by",
                  "type": "string",
                  "default": "id"
               },
               {
                  "name": "sortDir",
                  "in": "query",
                  "description": "The direction to sort",
                  "type": "string",
                  "enum": [
                     "asc",
                     "desc"
                  ],
                  "default": "asc"
               }
            ]
         }
      },
      "/baymodels/{identifier}": {
         "parameters": [
            {
               "name": "identifier",
               "description": "UUID or logical name of a baymodel.",
               "in": "path",
               "required": true,
               "type": "string"
            }
         ],
         "get": {
            "description": "Retrieve information about the given baymodel.",
            "responses": {
               "200": {
                  "description": "A representation of the bay model",
                  "schema": {
                     "description": "Represents an existing bay model",
                     "allOf": [
                        {
                           "type": "object",
                           "description": "Represents a new bay model about to be created",
                           "required": [
                              "coe",
                              "image_id",
                              "keypair_id"
                           ],
                           "properties": {
                              "name": {
                                 "type": "string",
                                 "description": "The name of the bay model",
                                 "minLength": 1,
                                 "maxLength": 255
                              },
                              "coe": {
                                 "type": "string",
                                 "description": "The Container Orchestration Engine for this bay model",
                                 "minLength": 1,
                                 "maxLength": 255
                              },
                              "image_id": {
                                 "type": "string",
                                 "description": "The image name or UUID to use as a base image for this baymodel",
                                 "minLength": 1,
                                 "maxLength": 255
                              },
                              "flavor_id": {
                                 "type": "string",
                                 "description": "The flavor of this bay model",
                                 "minLength": 1,
                                 "maxLength": 255
                              },
                              "master_flavor_id": {
                                 "type": "string",
                                 "description": "The flavor of the master node for this bay model",
                                 "minLength": 1,
                                 "maxLength": 255
                              },
                              "dns_nameserver": {
                                 "type": "string",
                                 "description": "The flavor of the master node for this bay model",
                                 "format": "ipv4"
                              },
                              "keypair_id": {
                                 "description": "The name or id of the nova ssh keypair",
                                 "type": "string",
                                 "minLength": 1,
                                 "maxLength": 255
                              },
                              "external_network_id": {
                                 "description": "The external network to attach the Bay",
                                 "type": "string",
                                 "minLength": 1,
                                 "maxLength": 255
                              },
                              "fixed_network": {
                                 "description": "The fixed network name to attach the Bay",
                                 "type": "string",
                                 "minLength": 1,
                                 "maxLength": 255
                              },
                              "apiserver_port": {
                                 "description": "The API server port for k8s",
                                 "type": "integer",
                                 "minimum": 1024,
                                 "maximum": 65535
                              },
                              "docker_volume_size": {
                                 "description": "The size in GB of the docker volume",
                                 "type": "integer",
                                 "minimum": 1
                              },
                              "ssh_authorized_key": {
                                 "description": "The SSH Authorized Key",
                                 "type": "string",
                                 "minLength": 1
                              },
                              "cluster_distro": {
                                 "description": "The Cluster distro for the bay, ex - coreos, fedora-atomic.",
                                 "type": "string",
                                 "minLength": 1,
                                 "maxLength": 255
                              },
                              "http_proxy": {
                                 "description": "http_proxy for the bay",
                                 "type": "string",
                                 "minLength": 1,
                                 "maxLength": 255
                              },
                              "https_proxy": {
                                 "description": "https_proxy for the bay",
                                 "type": "string",
                                 "minLength": 1,
                                 "maxLength": 255
                              },
                              "no_proxy": {
                                 "description": "Its comma separated list of IP addresses for which proxies should not used in the bay",
                                 "type": "string",
                                 "minLength": 1,
                                 "maxLength": 255
                              }
                           }
                        },
                        {
                           "type": "object",
                           "properties": {
                              "uuid": {
                                 "type": "string",
                                 "description": "Unique UUID for this baymodel",
                                 "format": "uuid"
                              },
                              "updated_at": {
                                 "description": "The date and time when the entity was last updated",
                                 "type": "string",
                                 "format": "datetime"
                              },
                              "links": {
                                 "description": "A list containing a self link and associated baymodel links",
                                 "type": "array",
                                 "items": {
                                    "type": "object",
                                    "properties": {
                                       "href": {
                                          "type": "string",
                                          "description": "The url of a link."
                                       },
                                       "rel": {
                                          "type": "string",
                                          "description": "The name of a link."
                                       },
                                       "type": {
                                          "type": "string",
                                          "description": "Indicates the type of document/link."
                                       }
                                    }
                                 }
                              },
                              "created_at": {
                                 "description": "The date and time when the entity was created",
                                 "type": "string",
                                 "format": "datetime"
                              }
                           }
                        }
                     ]
                  },
                  "examples": {
                     "application/json": {
                        "uuid": "27e3153e-d5bf-4b7e-b517-fb518e17f34c",
                        "name": "example",
                        "image_id": "Fedora-k8s",
                        "flavor_id": "m1.small",
                        "master_flavor_id": "m1.small",
                        "dns_nameserver": "8.8.1.1",
                        "keypair_id": "keypair1",
                        "external_network_id": "ffc44e4a-2319-4062-bce0-9ae1c38b05ba",
                        "fixed_network": "private",
                        "apiserver_port": 8080,
                        "docker_volume_size": 25,
                        "cluster_distro": "fedora-atomic",
                        "ssh_authorized_key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAB",
                        "coe": "kubernetes",
                        "http_proxy": "http://proxy.com:123",
                        "https_proxy": "https://proxy.com:123",
                        "no_proxy": "192.168.0.1,192.168.0.2,192.168.0.3",
                        "created_at": "2015-09-04 10:44:40.885958",
                        "updated_at": "2015-09-04 10:44:40.885958"
                     }
                  }
               },
               "404": {
                  "description": "Entity was not found"
               },
               "409": {
                  "description": "A conflict occurred. This is usually because you specified a name that is set for multiple entities."
               },
               "default": {
                  "description": "An unexpected error occurred"
               }
            }
         },
         "patch": {
            "description": "Update an existing baymodel.",
            "parameters": [
               {
                  "name": "jsonPatchDoc",
                  "in": "body",
                  "required": true,
                  "schema": {
                     "description": "A JSON Schema describing a JSON Patch",
                     "type": "array",
                     "items": {
                        "description": "A JSON patch document as defined by RFC 6902",
                        "required": [
                           "op",
                           "path"
                        ],
                        "properties": {
                           "op": {
                              "type": "string",
                              "description": "The operation to be performed",
                              "enum": [
                                 "add",
                                 "remove",
                                 "replace",
                                 "move",
                                 "copy",
                                 "test"
                              ]
                           },
                           "path": {
                              "type": "string",
                              "description": "A JSON pointer to the property being affected"
                           },
                           "value": {
                              "description": "The value to add, replace or test."
                           },
                           "from": {
                              "description": "A JSON Pointer path pointing to the locatoin to move/copy from.",
                              "type": "string"
                           }
                        }
                     }
                  }
               }
            ],
            "responses": {
               "200": {
                  "description": "A representation of the bay model",
                  "schema": {
                     "description": "Represents an existing bay model",
                     "allOf": [
                        {
                           "type": "object",
                           "description": "Represents a new bay model about to be created",
                           "required": [
                              "coe",
                              "image_id",
                              "keypair_id"
                           ],
                           "properties": {
                              "name": {
                                 "type": "string",
                                 "description": "The name of the bay model",
                                 "minLength": 1,
                                 "maxLength": 255
                              },
                              "coe": {
                                 "type": "string",
                                 "description": "The Container Orchestration Engine for this bay model",
                                 "minLength": 1,
                                 "maxLength": 255
                              },
                              "image_id": {
                                 "type": "string",
                                 "description": "The image name or UUID to use as a base image for this baymodel",
                                 "minLength": 1,
                                 "maxLength": 255
                              },
                              "flavor_id": {
                                 "type": "string",
                                 "description": "The flavor of this bay model",
                                 "minLength": 1,
                                 "maxLength": 255
                              },
                              "master_flavor_id": {
                                 "type": "string",
                                 "description": "The flavor of the master node for this bay model",
                                 "minLength": 1,
                                 "maxLength": 255
                              },
                              "dns_nameserver": {
                                 "type": "string",
                                 "description": "The flavor of the master node for this bay model",
                                 "format": "ipv4"
                              },
                              "keypair_id": {
                                 "description": "The name or id of the nova ssh keypair",
                                 "type": "string",
                                 "minLength": 1,
                                 "maxLength": 255
                              },
                              "external_network_id": {
                                 "description": "The external network to attach the Bay",
                                 "type": "string",
                                 "minLength": 1,
                                 "maxLength": 255
                              },
                              "fixed_network": {
                                 "description": "The fixed network name to attach the Bay",
                                 "type": "string",
                                 "minLength": 1,
                                 "maxLength": 255
                              },
                              "apiserver_port": {
                                 "description": "The API server port for k8s",
                                 "type": "integer",
                                 "minimum": 1024,
                                 "maximum": 65535
                              },
                              "docker_volume_size": {
                                 "description": "The size in GB of the docker volume",
                                 "type": "integer",
                                 "minimum": 1
                              },
                              "ssh_authorized_key": {
                                 "description": "The SSH Authorized Key",
                                 "type": "string",
                                 "minLength": 1
                              },
                              "cluster_distro": {
                                 "description": "The Cluster distro for the bay, ex - coreos, fedora-atomic.",
                                 "type": "string",
                                 "minLength": 1,
                                 "maxLength": 255
                              },
                              "http_proxy": {
                                 "description": "http_proxy for the bay",
                                 "type": "string",
                                 "minLength": 1,
                                 "maxLength": 255
                              },
                              "https_proxy": {
                                 "description": "https_proxy for the bay",
                                 "type": "string",
                                 "minLength": 1,
                                 "maxLength": 255
                              },
                              "no_proxy": {
                                 "description": "Its comma separated list of IP addresses for which proxies should not used in the bay",
                                 "type": "string",
                                 "minLength": 1,
                                 "maxLength": 255
                              }
                           }
                        },
                        {
                           "type": "object",
                           "properties": {
                              "uuid": {
                                 "type": "string",
                                 "description": "Unique UUID for this baymodel",
                                 "format": "uuid"
                              },
                              "updated_at": {
                                 "description": "The date and time when the entity was last updated",
                                 "type": "string",
                                 "format": "datetime"
                              },
                              "links": {
                                 "description": "A list containing a self link and associated baymodel links",
                                 "type": "array",
                                 "items": {
                                    "type": "object",
                                    "properties": {
                                       "href": {
                                          "type": "string",
                                          "description": "The url of a link."
                                       },
                                       "rel": {
                                          "type": "string",
                                          "description": "The name of a link."
                                       },
                                       "type": {
                                          "type": "string",
                                          "description": "Indicates the type of document/link."
                                       }
                                    }
                                 }
                              },
                              "created_at": {
                                 "description": "The date and time when the entity was created",
                                 "type": "string",
                                 "format": "datetime"
                              }
                           }
                        }
                     ]
                  },
                  "examples": {
                     "application/json": {
                        "uuid": "27e3153e-d5bf-4b7e-b517-fb518e17f34c",
                        "name": "example",
                        "image_id": "Fedora-k8s",
                        "flavor_id": "m1.small",
                        "master_flavor_id": "m1.small",
                        "dns_nameserver": "8.8.1.1",
                        "keypair_id": "keypair1",
                        "external_network_id": "ffc44e4a-2319-4062-bce0-9ae1c38b05ba",
                        "fixed_network": "private",
                        "apiserver_port": 8080,
                        "docker_volume_size": 25,
                        "cluster_distro": "fedora-atomic",
                        "ssh_authorized_key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAB",
                        "coe": "kubernetes",
                        "http_proxy": "http://proxy.com:123",
                        "https_proxy": "https://proxy.com:123",
                        "no_proxy": "192.168.0.1,192.168.0.2,192.168.0.3",
                        "created_at": "2015-09-04 10:44:40.885958",
                        "updated_at": "2015-09-04 10:44:40.885958"
                     }
                  }
               },
               "400": {
                  "description": "The request contained a malformed JSON body"
               },
               "404": {
                  "description": "Entity was not found"
               },
               "default": {
                  "description": "An unexpected error occurred"
               }
            }
         },
         "delete": {
            "description": "Permanently deletes a given bay model",
            "responses": {
               "204": {
                  "description": "The request was accepted for processing"
               },
               "404": {
                  "description": "Entity was not found"
               },
               "default": {
                  "description": "An unexpected error occurred"
               }
            }
         }
      },
      "/bays": {
         "get": {
            "description": "Retrieve a list of bays",
            "responses": {
               "200": {
                  "description": "A collection of bays",
                  "schema": {
                     "type": "array",
                     "items": {
                        "type": "object",
                        "description": "Represents an existing bay",
                        "properties": {
                           "uuid": {
                              "type": "string",
                              "description": "Unique UUID for this bay",
                              "format": "uuid"
                           },
                           "name": {
                              "type": "string",
                              "description": "The name of the bay",
                              "minLength": 1,
                              "maxLength": 255
                           },
                           "baymodel_id": {
                              "type": "string",
                              "description": "The bay model UUID"
                           },
                           "bay_create_timeout": {
                              "type": "integer",
                              "description": "Timeout for creating the bay in minutes. Set to 0 for no timeout",
                              "minimum": 0,
                              "default": 0
                           },
                           "node_count": {
                              "type": "integer",
                              "description": "The node count for this bay.",
                              "minimum": 1,
                              "default": 1
                           },
                           "master_count": {
                              "type": "integer",
                              "description": "The number of master nodes for this bay",
                              "minimum": 1,
                              "default": 1
                           },
                           "status": {
                              "type": "string",
                              "description": "Status of the bay from the heat stack"
                           }
                        }
                     }
                  },
                  "examples": {
                     "application/json": {
                        "baymodels": [
                           {
                              "uuid": "27e3153e-d5bf-4b7e-b517-fb518e17f34c",
                              "name": "example",
                              "baymodel_id": "4a96ac4b-2447-43f1-8ca6-9fd6f36d146d",
                              "bay_create_timeout": 15,
                              "node_count": 2,
                              "master_count": 1,
                              "status": "CREATE_COMPLETE"
                           }
                        ]
                     }
                  }
               },
               "default": {
                  "description": "An unexpected error occurred"
               }
            },
            "parameters": [
               {
                  "name": "marker",
                  "in": "query",
                  "description": "The UUID of the resource to start the collection from.",
                  "type": "string",
                  "format": "uuid"
               },
               {
                  "name": "limit",
                  "in": "query",
                  "description": "Maximum number of resources to return in a single result",
                  "type": "integer"
               },
               {
                  "name": "sortKey",
                  "in": "query",
                  "description": "Column to sort results by",
                  "type": "string",
                  "default": "id"
               },
               {
                  "name": "sortDir",
                  "in": "query",
                  "description": "The direction to sort",
                  "type": "string",
                  "enum": [
                     "asc",
                     "desc"
                  ],
                  "default": "asc"
               }
            ]
         },
         "post": {
            "description": "Create a new bay",
            "responses": {
               "201": {
                  "description": "Indicates a successful creation",
                  "schema": {
                     "description": "Represents an existing bay",
                     "allOf": [
                        {
                           "type": "object",
                           "description": "Represents a new bay to be created",
                           "required": [
                              "baymodel_id"
                           ],
                           "properties": {
                              "name": {
                                 "type": "string",
                                 "description": "The name of the bay",
                                 "minLength": 1,
                                 "maxLength": 255
                              },
                              "baymodel_id": {
                                 "type": "string",
                                 "description": "The bay model UUID"
                              },
                              "node_count": {
                                 "type": "integer",
                                 "description": "The node count for this bay.",
                                 "minimum": 1,
                                 "default": 1
                              },
                              "master_count": {
                                 "type": "integer",
                                 "description": "The number of master nodes for this bay",
                                 "minimum": 1,
                                 "default": 1
                              },
                              "bay_create_timeout": {
                                 "type": "integer",
                                 "description": "Timeout for creating the bay in minutes. Set to 0 for no timeout",
                                 "minimum": 0,
                                 "default": 0
                              },
                              "status": {
                                 "type": "string",
                                 "description": "Status of the bay from the heat stack"
                              },
                              "status_reason": {
                                 "type": "string",
                                 "description": "Status reason of the bay from the heat stack"
                              },
                              "discovery_url": {
                                 "type": "string",
                                 "description": "URL used for bay node discovery"
                              },
                              "api_address": {
                                 "type": "string",
                                 "description": "API address of cluster master node"
                              },
                              "node_addresses": {
                                 "type": "array",
                                 "description": "List of IP addresses for the cluster slave nodes",
                                 "items": {
                                    "type": "string",
                                    "description": "The IP address of the slave node"
                                 },
                                 "uniqueItems": true
                              }
                           }
                        },
                        {
                           "type": "object",
                           "properties": {
                              "uuid": {
                                 "type": "string",
                                 "description": "Unique UUID for this bay",
                                 "format": "uuid"
                              },
                              "updated_at": {
                                 "description": "The date and time when the entity was last updated",
                                 "type": "string",
                                 "format": "datetime"
                              },
                              "links": {
                                 "description": "A list containing a self link and associated baymodel links",
                                 "type": "array",
                                 "items": {
                                    "type": "object",
                                    "properties": {
                                       "href": {
                                          "type": "string",
                                          "description": "The url of a link."
                                       },
                                       "rel": {
                                          "type": "string",
                                          "description": "The name of a link."
                                       },
                                       "type": {
                                          "type": "string",
                                          "description": "Indicates the type of document/link."
                                       }
                                    }
                                 }
                              },
                              "created_at": {
                                 "description": "The date and time when the entity was created",
                                 "type": "string",
                                 "format": "datetime"
                              }
                           }
                        }
                     ]
                  }
               },
               "400": {
                  "description": "The request contained a malformed JSON body"
               },
               "404": {
                  "description": "Entity was not found"
               },
               "409": {
                  "description": "A conflict occurred. This is usually because you specified a name that is set for multiple entities."
               },
               "default": {
                  "description": "An unexpected error occurred"
               }
            },
            "parameters": [
               {
                  "name": "json",
                  "in": "body",
                  "required": true,
                  "schema": {
                     "type": "object",
                     "description": "Represents a new bay to be created",
                     "required": [
                        "baymodel_id"
                     ],
                     "properties": {
                        "name": {
                           "type": "string",
                           "description": "The name of the bay",
                           "minLength": 1,
                           "maxLength": 255
                        },
                        "baymodel_id": {
                           "type": "string",
                           "description": "The bay model UUID"
                        },
                        "node_count": {
                           "type": "integer",
                           "description": "The node count for this bay.",
                           "minimum": 1,
                           "default": 1
                        },
                        "master_count": {
                           "type": "integer",
                           "description": "The number of master nodes for this bay",
                           "minimum": 1,
                           "default": 1
                        },
                        "bay_create_timeout": {
                           "type": "integer",
                           "description": "Timeout for creating the bay in minutes. Set to 0 for no timeout",
                           "minimum": 0,
                           "default": 0
                        },
                        "status": {
                           "type": "string",
                           "description": "Status of the bay from the heat stack"
                        },
                        "status_reason": {
                           "type": "string",
                           "description": "Status reason of the bay from the heat stack"
                        },
                        "discovery_url": {
                           "type": "string",
                           "description": "URL used for bay node discovery"
                        },
                        "api_address": {
                           "type": "string",
                           "description": "API address of cluster master node"
                        },
                        "node_addresses": {
                           "type": "array",
                           "description": "List of IP addresses for the cluster slave nodes",
                           "items": {
                              "type": "string",
                              "description": "The IP address of the slave node"
                           },
                           "uniqueItems": true
                        }
                     }
                  }
               }
            ]
         }
      },
      "/bays/detail": {
         "get": {
            "description": "Retrieve a list of bays with detailed information",
            "responses": {
               "200": {
                  "description": "A detailed collection of bays",
                  "schema": {
                     "type": "array",
                     "items": {
                        "description": "Represents an existing bay",
                        "allOf": [
                           {
                              "type": "object",
                              "description": "Represents a new bay to be created",
                              "required": [
                                 "baymodel_id"
                              ],
                              "properties": {
                                 "name": {
                                    "type": "string",
                                    "description": "The name of the bay",
                                    "minLength": 1,
                                    "maxLength": 255
                                 },
                                 "baymodel_id": {
                                    "type": "string",
                                    "description": "The bay model UUID"
                                 },
                                 "node_count": {
                                    "type": "integer",
                                    "description": "The node count for this bay.",
                                    "minimum": 1,
                                    "default": 1
                                 },
                                 "master_count": {
                                    "type": "integer",
                                    "description": "The number of master nodes for this bay",
                                    "minimum": 1,
                                    "default": 1
                                 },
                                 "bay_create_timeout": {
                                    "type": "integer",
                                    "description": "Timeout for creating the bay in minutes. Set to 0 for no timeout",
                                    "minimum": 0,
                                    "default": 0
                                 },
                                 "status": {
                                    "type": "string",
                                    "description": "Status of the bay from the heat stack"
                                 },
                                 "status_reason": {
                                    "type": "string",
                                    "description": "Status reason of the bay from the heat stack"
                                 },
                                 "discovery_url": {
                                    "type": "string",
                                    "description": "URL used for bay node discovery"
                                 },
                                 "api_address": {
                                    "type": "string",
                                    "description": "API address of cluster master node"
                                 },
                                 "node_addresses": {
                                    "type": "array",
                                    "description": "List of IP addresses for the cluster slave nodes",
                                    "items": {
                                       "type": "string",
                                       "description": "The IP address of the slave node"
                                    },
                                    "uniqueItems": true
                                 }
                              }
                           },
                           {
                              "type": "object",
                              "properties": {
                                 "uuid": {
                                    "type": "string",
                                    "description": "Unique UUID for this bay",
                                    "format": "uuid"
                                 },
                                 "updated_at": {
                                    "description": "The date and time when the entity was last updated",
                                    "type": "string",
                                    "format": "datetime"
                                 },
                                 "links": {
                                    "description": "A list containing a self link and associated baymodel links",
                                    "type": "array",
                                    "items": {
                                       "type": "object",
                                       "properties": {
                                          "href": {
                                             "type": "string",
                                             "description": "The url of a link."
                                          },
                                          "rel": {
                                             "type": "string",
                                             "description": "The name of a link."
                                          },
                                          "type": {
                                             "type": "string",
                                             "description": "Indicates the type of document/link."
                                          }
                                       }
                                    }
                                 },
                                 "created_at": {
                                    "description": "The date and time when the entity was created",
                                    "type": "string",
                                    "format": "datetime"
                                 }
                              }
                           }
                        ]
                     }
                  },
                  "examples": {
                     "application/json": {
                        "baymodels": [
                           {
                              "uuid": "27e3153e-d5bf-4b7e-b517-fb518e17f34c",
                              "name": "example",
                              "baymodel_id": "4a96ac4b-2447-43f1-8ca6-9fd6f36d146d",
                              "node_count": 2,
                              "master_count": 1,
                              "bay_create_timeout": 15,
                              "status": "CREATE_COMPLETE",
                              "status_reason": "CREATE completed successfully",
                              "api_address": "172.24.4.3",
                              "node_addresses": [
                                 "172.24.4.4",
                                 "172.24.4.5"
                              ],
                              "created_at": "2015-09-04 10:44:40.885958",
                              "updated_at": "2015-09-04 10:44:40.885958"
                           }
                        ]
                     }
                  }
               },
               "404": {
                  "description": "Entity was not found"
               },
               "409": {
                  "description": "A conflict occurred. This is usually because you specified a name that is set for multiple entities."
               },
               "default": {
                  "description": "An unexpected error occurred"
               }
            },
            "parameters": [
               {
                  "name": "bay_uuid",
                  "in": "query",
                  "description": "Allows filtering the collection according to UUID",
                  "type": "string",
                  "format": "uuid"
               },
               {
                  "name": "marker",
                  "in": "query",
                  "description": "The UUID of the resource to start the collection from.",
                  "type": "string",
                  "format": "uuid"
               },
               {
                  "name": "limit",
                  "in": "query",
                  "description": "Maximum number of resources to return in a single result",
                  "type": "integer"
               },
               {
                  "name": "sortKey",
                  "in": "query",
                  "description": "Column to sort results by",
                  "type": "string",
                  "default": "id"
               },
               {
                  "name": "sortDir",
                  "in": "query",
                  "description": "The direction to sort",
                  "type": "string",
                  "enum": [
                     "asc",
                     "desc"
                  ],
                  "default": "asc"
               }
            ]
         }
      },
      "/bays/{identifier}": {
         "parameters": [
            {
               "name": "identifier",
               "description": "UUID or logical name of the bay.",
               "in": "path",
               "required": true,
               "type": "string"
            }
         ],
         "get": {
            "description": "Retrieve information about the given bay.",
            "responses": {
               "200": {
                  "description": "A representation of the bay",
                  "schema": {
                     "description": "Represents an existing bay",
                     "allOf": [
                        {
                           "type": "object",
                           "description": "Represents a new bay to be created",
                           "required": [
                              "baymodel_id"
                           ],
                           "properties": {
                              "name": {
                                 "type": "string",
                                 "description": "The name of the bay",
                                 "minLength": 1,
                                 "maxLength": 255
                              },
                              "baymodel_id": {
                                 "type": "string",
                                 "description": "The bay model UUID"
                              },
                              "node_count": {
                                 "type": "integer",
                                 "description": "The node count for this bay.",
                                 "minimum": 1,
                                 "default": 1
                              },
                              "master_count": {
                                 "type": "integer",
                                 "description": "The number of master nodes for this bay",
                                 "minimum": 1,
                                 "default": 1
                              },
                              "bay_create_timeout": {
                                 "type": "integer",
                                 "description": "Timeout for creating the bay in minutes. Set to 0 for no timeout",
                                 "minimum": 0,
                                 "default": 0
                              },
                              "status": {
                                 "type": "string",
                                 "description": "Status of the bay from the heat stack"
                              },
                              "status_reason": {
                                 "type": "string",
                                 "description": "Status reason of the bay from the heat stack"
                              },
                              "discovery_url": {
                                 "type": "string",
                                 "description": "URL used for bay node discovery"
                              },
                              "api_address": {
                                 "type": "string",
                                 "description": "API address of cluster master node"
                              },
                              "node_addresses": {
                                 "type": "array",
                                 "description": "List of IP addresses for the cluster slave nodes",
                                 "items": {
                                    "type": "string",
                                    "description": "The IP address of the slave node"
                                 },
                                 "uniqueItems": true
                              }
                           }
                        },
                        {
                           "type": "object",
                           "properties": {
                              "uuid": {
                                 "type": "string",
                                 "description": "Unique UUID for this bay",
                                 "format": "uuid"
                              },
                              "updated_at": {
                                 "description": "The date and time when the entity was last updated",
                                 "type": "string",
                                 "format": "datetime"
                              },
                              "links": {
                                 "description": "A list containing a self link and associated baymodel links",
                                 "type": "array",
                                 "items": {
                                    "type": "object",
                                    "properties": {
                                       "href": {
                                          "type": "string",
                                          "description": "The url of a link."
                                       },
                                       "rel": {
                                          "type": "string",
                                          "description": "The name of a link."
                                       },
                                       "type": {
                                          "type": "string",
                                          "description": "Indicates the type of document/link."
                                       }
                                    }
                                 }
                              },
                              "created_at": {
                                 "description": "The date and time when the entity was created",
                                 "type": "string",
                                 "format": "datetime"
                              }
                           }
                        }
                     ]
                  },
                  "examples": {
                     "application/json": {
                        "uuid": "27e3153e-d5bf-4b7e-b517-fb518e17f34c",
                        "name": "example",
                        "baymodel_id": "4a96ac4b-2447-43f1-8ca6-9fd6f36d146d",
                        "node_count": 2,
                        "master_count": 1,
                        "bay_create_timeout": 15,
                        "status": "CREATE_COMPLETE",
                        "status_reason": "CREATE completed successfully",
                        "api_address": "172.24.4.3",
                        "node_addresses": [
                           "172.24.4.4",
                           "172.24.4.5"
                        ],
                        "created_at": "2015-09-04 10:44:40.885958",
                        "updated_at": "2015-09-04 10:44:40.885958"
                     }
                  }
               },
               "404": {
                  "description": "Entity was not found"
               },
               "409": {
                  "description": "A conflict occurred. This is usually because you specified a name that is set for multiple entities."
               }
            }
         },
         "patch": {
            "description": "Update an existing bay.",
            "parameters": [
               {
                  "name": "jsonPatchDoc",
                  "in": "body",
                  "required": true,
                  "schema": {
                     "description": "A JSON Schema describing a JSON Patch",
                     "type": "array",
                     "items": {
                        "description": "A JSON patch document as defined by RFC 6902",
                        "required": [
                           "op",
                           "path"
                        ],
                        "properties": {
                           "op": {
                              "type": "string",
                              "description": "The operation to be performed",
                              "enum": [
                                 "add",
                                 "remove",
                                 "replace",
                                 "move",
                                 "copy",
                                 "test"
                              ]
                           },
                           "path": {
                              "type": "string",
                              "description": "A JSON pointer to the property being affected"
                           },
                           "value": {
                              "description": "The value to add, replace or test."
                           },
                           "from": {
                              "description": "A JSON Pointer path pointing to the locatoin to move/copy from.",
                              "type": "string"
                           }
                        }
                     }
                  }
               }
            ],
            "responses": {
               "200": {
                  "description": "A representation of the bay",
                  "schema": {
                     "description": "Represents an existing bay",
                     "allOf": [
                        {
                           "type": "object",
                           "description": "Represents a new bay to be created",
                           "required": [
                              "baymodel_id"
                           ],
                           "properties": {
                              "name": {
                                 "type": "string",
                                 "description": "The name of the bay",
                                 "minLength": 1,
                                 "maxLength": 255
                              },
                              "baymodel_id": {
                                 "type": "string",
                                 "description": "The bay model UUID"
                              },
                              "node_count": {
                                 "type": "integer",
                                 "description": "The node count for this bay.",
                                 "minimum": 1,
                                 "default": 1
                              },
                              "master_count": {
                                 "type": "integer",
                                 "description": "The number of master nodes for this bay",
                                 "minimum": 1,
                                 "default": 1
                              },
                              "bay_create_timeout": {
                                 "type": "integer",
                                 "description": "Timeout for creating the bay in minutes. Set to 0 for no timeout",
                                 "minimum": 0,
                                 "default": 0
                              },
                              "status": {
                                 "type": "string",
                                 "description": "Status of the bay from the heat stack"
                              },
                              "status_reason": {
                                 "type": "string",
                                 "description": "Status reason of the bay from the heat stack"
                              },
                              "discovery_url": {
                                 "type": "string",
                                 "description": "URL used for bay node discovery"
                              },
                              "api_address": {
                                 "type": "string",
                                 "description": "API address of cluster master node"
                              },
                              "node_addresses": {
                                 "type": "array",
                                 "description": "List of IP addresses for the cluster slave nodes",
                                 "items": {
                                    "type": "string",
                                    "description": "The IP address of the slave node"
                                 },
                                 "uniqueItems": true
                              }
                           }
                        },
                        {
                           "type": "object",
                           "properties": {
                              "uuid": {
                                 "type": "string",
                                 "description": "Unique UUID for this bay",
                                 "format": "uuid"
                              },
                              "updated_at": {
                                 "description": "The date and time when the entity was last updated",
                                 "type": "string",
                                 "format": "datetime"
                              },
                              "links": {
                                 "description": "A list containing a self link and associated baymodel links",
                                 "type": "array",
                                 "items": {
                                    "type": "object",
                                    "properties": {
                                       "href": {
                                          "type": "string",
                                          "description": "The url of a link."
                                       },
                                       "rel": {
                                          "type": "string",
                                          "description": "The name of a link."
                                       },
                                       "type": {
                                          "type": "string",
                                          "description": "Indicates the type of document/link."
                                       }
                                    }
                                 }
                              },
                              "created_at": {
                                 "description": "The date and time when the entity was created",
                                 "type": "string",
                                 "format": "datetime"
                              }
                           }
                        }
                     ]
                  },
                  "examples": {
                     "application/json": {
                        "uuid": "27e3153e-d5bf-4b7e-b517-fb518e17f34c",
                        "name": "example",
                        "baymodel_id": "4a96ac4b-2447-43f1-8ca6-9fd6f36d146d",
                        "node_count": 2,
                        "master_count": 1,
                        "bay_create_timeout": 15,
                        "status": "CREATE_COMPLETE",
                        "status_reason": "CREATE completed successfully",
                        "api_address": "172.24.4.3",
                        "node_addresses": [
                           "172.24.4.4",
                           "172.24.4.5"
                        ],
                        "created_at": "2015-09-04 10:44:40.885958",
                        "updated_at": "2015-09-04 10:44:40.885958"
                     }
                  }
               },
               "400": {
                  "description": "The request contained a malformed JSON body"
               },
               "404": {
                  "description": "Entity was not found"
               }
            }
         },
         "delete": {
            "description": "Permanently deletes a given bay",
            "responses": {
               "204": {
                  "description": "The request was accepted for processing"
               },
               "404": {
                  "description": "Entity was not found"
               },
               "default": {
                  "description": "An unexpected error occurred"
               }
            }
         }
      },
      "/containers": {
         "get": {
            "description": "Retrieve a list of containers",
            "responses": {
               "200": {
                  "description": "A collection of containers",
                  "schema": {
                     "type": "array",
                     "items": {
                        "type": "object",
                        "description": "Represents a container in a collection listing",
                        "properties": {
                           "uuid": {
                              "type": "string",
                              "description": "Unique UUID for this container",
                              "format": "uuid"
                           },
                           "name": {
                              "description": "Name of this container",
                              "type": "string",
                              "minLength": 1,
                              "maxLength": 255
                           },
                           "image": {
                              "description": "The image name or ID to use as a base image for this container",
                              "type": "string"
                           },
                           "command": {
                              "description": "The command to execute when container starts",
                              "type": "string"
                           },
                           "bay_uuid": {
                              "type": "string",
                              "description": "Unique UUID of the bay this runs on",
                              "format": "uuid"
                           },
                           "status": {
                              "description": "The status of container",
                              "type": "string"
                           },
                           "links": {
                              "description": "A list containing a self link and associated baymodel links",
                              "type": "array",
                              "items": {
                                 "type": "object",
                                 "properties": {
                                    "href": {
                                       "type": "string",
                                       "description": "The url of a link."
                                    },
                                    "rel": {
                                       "type": "string",
                                       "description": "The name of a link."
                                    },
                                    "type": {
                                       "type": "string",
                                       "description": "Indicates the type of document/link."
                                    }
                                 }
                              }
                           },
                           "created_at": {
                              "description": "The date and time when the entity was created",
                              "type": "string",
                              "format": "datetime"
                           },
                           "updated_at": {
                              "description": "The date and time when the entity was last updated",
                              "type": "string",
                              "format": "datetime"
                           }
                        }
                     }
                  },
                  "examples": {
                     "application/json": {
                        "containers": [
                           {
                              "uuid": "27e3153e-d5bf-4b7e-b517-fb518e17f34c",
                              "name": "example",
                              "image": "ubuntu",
                              "command": "env",
                              "status": "Running",
                              "bay_uuid": "fff114da-3bfa-4a0f-a123-c0dffad9718e"
                           }
                        ]
                     }
                  }
               },
               "default": {
                  "description": "An unexpected error occurred"
               }
            },
            "parameters": [
               {
                  "name": "marker",
                  "in": "query",
                  "description": "The UUID of the resource to start the collection from.",
                  "type": "string",
                  "format": "uuid"
               },
               {
                  "name": "limit",
                  "in": "query",
                  "description": "Maximum number of resources to return in a single result",
                  "type": "integer"
               },
               {
                  "name": "sortKey",
                  "in": "query",
                  "description": "Column to sort results by",
                  "type": "string",
                  "default": "id"
               },
               {
                  "name": "sortDir",
                  "in": "query",
                  "description": "The direction to sort",
                  "type": "string",
                  "enum": [
                     "asc",
                     "desc"
                  ],
                  "default": "asc"
               }
            ]
         },
         "post": {
            "description": "Create a new container",
            "responses": {
               "201": {
                  "description": "Indicates a successful creation",
                  "schema": {
                     "type": "object",
                     "description": "Represents an existing container",
                     "properties": {
                        "uuid": {
                           "type": "string",
                           "description": "Unique UUID for this container",
                           "format": "uuid"
                        },
                        "name": {
                           "description": "Name of this container",
                           "type": "string",
                           "minLength": 1,
                           "maxLength": 255
                        },
                        "image": {
                           "description": "The image name or ID to use as a base image for this container",
                           "type": "string"
                        },
                        "command": {
                           "description": "The command to execute when container starts",
                           "type": "string"
                        },
                        "bay_uuid": {
                           "type": "string",
                           "description": "Unique UUID of the bay this runs on",
                           "format": "uuid"
                        },
                        "status": {
                           "description": "The status of container",
                           "type": "string"
                        },
                        "links": {
                           "description": "A list containing a self link and associated baymodel links",
                           "type": "array",
                           "items": {
                              "type": "object",
                              "properties": {
                                 "href": {
                                    "type": "string",
                                    "description": "The url of a link."
                                 },
                                 "rel": {
                                    "type": "string",
                                    "description": "The name of a link."
                                 },
                                 "type": {
                                    "type": "string",
                                    "description": "Indicates the type of document/link."
                                 }
                              }
                           }
                        },
                        "created_at": {
                           "description": "The date and time when the entity was created",
                           "type": "string",
                           "format": "datetime"
                        },
                        "updated_at": {
                           "description": "The date and time when the entity was last updated",
                           "type": "string",
                           "format": "datetime"
                        }
                     }
                  }
               },
               "400": {
                  "description": "The request contained a malformed JSON body"
               },
               "404": {
                  "description": "Entity was not found"
               },
               "409": {
                  "description": "A conflict occurred. This is usually because you specified a name that is set for multiple entities."
               },
               "default": {
                  "description": "An unexpected error occurred"
               }
            },
            "parameters": [
               {
                  "name": "json",
                  "in": "body",
                  "required": true,
                  "schema": {
                     "type": "object",
                     "description": "Represents a new container to be created",
                     "required": [
                        "bay_uuid"
                     ],
                     "properties": {
                        "name": {
                           "description": "Name of this container",
                           "type": "string",
                           "minLength": 1,
                           "maxLength": 255
                        },
                        "image": {
                           "description": "The image name or ID to use as a base image for this container",
                           "type": "string"
                        },
                        "command": {
                           "description": "The command to execute when container starts",
                           "type": "string"
                        },
                        "bay_uuid": {
                           "type": "string",
                           "description": "Unique UUID of the bay this runs on",
                           "format": "uuid"
                        }
                     }
                  }
               }
            ]
         }
      },
      "/containers/{identifier}": {
         "parameters": [
            {
               "name": "identifier",
               "description": "UUID or logical name of the container.",
               "in": "path",
               "required": true,
               "type": "string"
            }
         ],
         "get": {
            "description": "Retrieve information about the given container.",
            "responses": {
               "200": {
                  "description": "A representation of the container",
                  "schema": {
                     "type": "object",
                     "description": "Represents an existing container",
                     "properties": {
                        "uuid": {
                           "type": "string",
                           "description": "Unique UUID for this container",
                           "format": "uuid"
                        },
                        "name": {
                           "description": "Name of this container",
                           "type": "string",
                           "minLength": 1,
                           "maxLength": 255
                        },
                        "image": {
                           "description": "The image name or ID to use as a base image for this container",
                           "type": "string"
                        },
                        "command": {
                           "description": "The command to execute when container starts",
                           "type": "string"
                        },
                        "bay_uuid": {
                           "type": "string",
                           "description": "Unique UUID of the bay this runs on",
                           "format": "uuid"
                        },
                        "status": {
                           "description": "The status of container",
                           "type": "string"
                        },
                        "links": {
                           "description": "A list containing a self link and associated baymodel links",
                           "type": "array",
                           "items": {
                              "type": "object",
                              "properties": {
                                 "href": {
                                    "type": "string",
                                    "description": "The url of a link."
                                 },
                                 "rel": {
                                    "type": "string",
                                    "description": "The name of a link."
                                 },
                                 "type": {
                                    "type": "string",
                                    "description": "Indicates the type of document/link."
                                 }
                              }
                           }
                        },
                        "created_at": {
                           "description": "The date and time when the entity was created",
                           "type": "string",
                           "format": "datetime"
                        },
                        "updated_at": {
                           "description": "The date and time when the entity was last updated",
                           "type": "string",
                           "format": "datetime"
                        }
                     }
                  },
                  "examples": {
                     "application/json": {
                        "uuid": "27e3153e-d5bf-4b7e-b517-fb518e17f34c",
                        "name": "example",
                        "image": "ubuntu",
                        "command": "env",
                        "status": "Running",
                        "bay_uuid": "fff114da-3bfa-4a0f-a123-c0dffad9718e",
                        "created_at": "2015-09-04 10:44:40.885958",
                        "updated_at": "2015-09-04 10:44:40.885958"
                     }
                  }
               },
               "404": {
                  "description": "Entity was not found"
               },
               "409": {
                  "description": "A conflict occurred. This is usually because you specified a name that is set for multiple entities."
               }
            }
         },
         "patch": {
            "description": "Update an existing container.",
            "parameters": [
               {
                  "name": "jsonPatchDoc",
                  "in": "body",
                  "required": true,
                  "schema": {
                     "description": "A JSON Schema describing a JSON Patch",
                     "type": "array",
                     "items": {
                        "description": "A JSON patch document as defined by RFC 6902",
                        "required": [
                           "op",
                           "path"
                        ],
                        "properties": {
                           "op": {
                              "type": "string",
                              "description": "The operation to be performed",
                              "enum": [
                                 "add",
                                 "remove",
                                 "replace",
                                 "move",
                                 "copy",
                                 "test"
                              ]
                           },
                           "path": {
                              "type": "string",
                              "description": "A JSON pointer to the property being affected"
                           },
                           "value": {
                              "description": "The value to add, replace or test."
                           },
                           "from": {
                              "description": "A JSON Pointer path pointing to the locatoin to move/copy from.",
                              "type": "string"
                           }
                        }
                     }
                  }
               }
            ],
            "responses": {
               "200": {
                  "description": "A representation of the container",
                  "schema": {
                     "type": "object",
                     "description": "Represents an existing container",
                     "properties": {
                        "uuid": {
                           "type": "string",
                           "description": "Unique UUID for this container",
                           "format": "uuid"
                        },
                        "name": {
                           "description": "Name of this container",
                           "type": "string",
                           "minLength": 1,
                           "maxLength": 255
                        },
                        "image": {
                           "description": "The image name or ID to use as a base image for this container",
                           "type": "string"
                        },
                        "command": {
                           "description": "The command to execute when container starts",
                           "type": "string"
                        },
                        "bay_uuid": {
                           "type": "string",
                           "description": "Unique UUID of the bay this runs on",
                           "format": "uuid"
                        },
                        "status": {
                           "description": "The status of container",
                           "type": "string"
                        },
                        "links": {
                           "description": "A list containing a self link and associated baymodel links",
                           "type": "array",
                           "items": {
                              "type": "object",
                              "properties": {
                                 "href": {
                                    "type": "string",
                                    "description": "The url of a link."
                                 },
                                 "rel": {
                                    "type": "string",
                                    "description": "The name of a link."
                                 },
                                 "type": {
                                    "type": "string",
                                    "description": "Indicates the type of document/link."
                                 }
                              }
                           }
                        },
                        "created_at": {
                           "description": "The date and time when the entity was created",
                           "type": "string",
                           "format": "datetime"
                        },
                        "updated_at": {
                           "description": "The date and time when the entity was last updated",
                           "type": "string",
                           "format": "datetime"
                        }
                     }
                  },
                  "examples": {
                     "application/json": {
                        "uuid": "27e3153e-d5bf-4b7e-b517-fb518e17f34c",
                        "name": "example",
                        "image": "ubuntu",
                        "command": "env",
                        "status": "Running",
                        "bay_uuid": "fff114da-3bfa-4a0f-a123-c0dffad9718e",
                        "created_at": "2015-09-04 10:44:40.885958",
                        "updated_at": "2015-09-04 10:44:40.885958"
                     }
                  }
               },
               "400": {
                  "description": "The request contained a malformed JSON body"
               },
               "404": {
                  "description": "Entity was not found"
               }
            }
         },
         "delete": {
            "description": "Permanently deletes a given container",
            "responses": {
               "204": {
                  "description": "The request was accepted for processing"
               },
               "404": {
                  "description": "Entity was not found"
               },
               "default": {
                  "description": "An unexpected error occurred"
               }
            }
         }
      },
      "/containers/{identifier}/start": {
         "put": {
            "description": "Starts the container",
            "responses": {
               "200": {
                  "description": "Indicates a successful action"
               },
               "404": {
                  "description": "Entity was not found"
               },
               "409": {
                  "description": "A conflict occurred. This is usually because you specified a name that is set for multiple entities."
               },
               "default": {
                  "description": "An unexpected error occurred"
               }
            },
            "parameters": [
               {
                  "name": "identifier",
                  "description": "UUID or logical name of the container.",
                  "in": "path",
                  "required": true,
                  "type": "string"
               }
            ]
         }
      },
      "/containers/{identifier}/stop": {
         "put": {
            "description": "Stop the container",
            "responses": {
               "200": {
                  "description": "Indicates a successful action"
               },
               "404": {
                  "description": "Entity was not found"
               },
               "409": {
                  "description": "A conflict occurred. This is usually because you specified a name that is set for multiple entities."
               },
               "default": {
                  "description": "An unexpected error occurred"
               }
            },
            "parameters": [
               {
                  "name": "identifier",
                  "description": "UUID or logical name of the container.",
                  "in": "path",
                  "required": true,
                  "type": "string"
               }
            ]
         }
      },
      "/containers/{identifier}/pause": {
         "put": {
            "description": "Pauses the container",
            "responses": {
               "200": {
                  "description": "Indicates a successful action"
               },
               "404": {
                  "description": "Entity was not found"
               },
               "409": {
                  "description": "A conflict occurred. This is usually because you specified a name that is set for multiple entities."
               },
               "default": {
                  "description": "An unexpected error occurred"
               }
            },
            "parameters": [
               {
                  "name": "identifier",
                  "description": "UUID or logical name of the container.",
                  "in": "path",
                  "required": true,
                  "type": "string"
               }
            ]
         }
      },
      "/containers/{identifier}/unpause": {
         "put": {
            "description": "Unpauses the container",
            "responses": {
               "200": {
                  "description": "Indicates a successful action"
               },
               "404": {
                  "description": "Entity was not found"
               },
               "409": {
                  "description": "A conflict occurred. This is usually because you specified a name that is set for multiple entities."
               },
               "default": {
                  "description": "An unexpected error occurred"
               }
            },
            "parameters": [
               {
                  "name": "identifier",
                  "description": "UUID or logical name of the container.",
                  "in": "path",
                  "required": true,
                  "type": "string"
               }
            ]
         }
      },
      "/containers/{identifier}/reboot": {
         "put": {
            "description": "Reboots the container",
            "responses": {
               "200": {
                  "description": "Indicates a successful action"
               },
               "404": {
                  "description": "Entity was not found"
               },
               "409": {
                  "description": "A conflict occurred. This is usually because you specified a name that is set for multiple entities."
               },
               "default": {
                  "description": "An unexpected error occurred"
               }
            },
            "parameters": [
               {
                  "name": "identifier",
                  "description": "UUID or logical name of the container.",
                  "in": "path",
                  "required": true,
                  "type": "string"
               }
            ]
         }
      },
      "/containers/{identifier}/logs": {
         "put": {
            "description": "Retrieves the logs for the container",
            "responses": {
               "200": {
                  "description": "Indicates a successful action"
               },
               "404": {
                  "description": "Entity was not found"
               },
               "409": {
                  "description": "A conflict occurred. This is usually because you specified a name that is set for multiple entities."
               },
               "default": {
                  "description": "An unexpected error occurred"
               }
            },
            "parameters": [
               {
                  "name": "identifier",
                  "description": "UUID or logical name of the container.",
                  "in": "path",
                  "required": true,
                  "type": "string"
               }
            ]
         }
      },
      "/containers/{identifier}/execute": {
         "put": {
            "description": "Executes an arbitrary command inside the container",
            "responses": {
               "200": {
                  "description": "Indicates a successful action"
               },
               "404": {
                  "description": "Entity was not found"
               },
               "409": {
                  "description": "A conflict occurred. This is usually because you specified a name that is set for multiple entities."
               },
               "default": {
                  "description": "An unexpected error occurred"
               }
            },
            "parameters": [
               {
                  "name": "identifier",
                  "description": "UUID or logical name of the container.",
                  "in": "path",
                  "required": true,
                  "type": "string"
               },
               {
                  "name": "command",
                  "description": "The JSON blob which represents the command",
                  "in": "body",
                  "required": true,
                  "schema": {
                     "type": "object",
                     "properties": {
                        "command": {
                           "type": "string",
                           "description": "The shell command that will be executed"
                        }
                     }
                  }
               }
            ]
         }
      },
      "/x509keypairs": {
         "get": {
            "description": "Retrieve a list of keypairs",
            "responses": {
               "200": {
                  "description": "A collection of KeyPairs",
                  "schema": {
                     "type": "array",
                     "items": {
                        "type": "object",
                        "description": "Represents an existing keypair in a collection",
                        "properties": {
                           "uuid": {
                              "type": "string",
                              "description": "Unique UUID for this container",
                              "format": "uuid"
                           },
                           "name": {
                              "description": "Name of this container",
                              "type": "string",
                              "minLength": 1,
                              "maxLength": 255
                           },
                           "bay_uuid": {
                              "type": "string",
                              "description": "Unique UUID of the bay this runs on",
                              "format": "uuid"
                           },
                           "ca_cert": {
                              "description": "The CA certificate",
                              "type": "string",
                              "minLength": 1
                           },
                           "certificate": {
                              "description": "The certificate",
                              "type": "string",
                              "minLength": 1
                           },
                           "private_key": {
                              "description": "The private key",
                              "type": "string",
                              "minLength": 1
                           }
                        }
                     }
                  },
                  "examples": {
                     "application/json": {
                        "keypairs": [
                           {
                              "uuid": "27e3153e-d5bf-4b7e-b517-fb518e17f34c",
                              "name": "example",
                              "bay_uuid": "7ae81bb3-dec3-4289-8d6c-da80bd8001ae",
                              "ca_cert": "AAA....AAA",
                              "certificate": "BBB....BBB",
                              "private_key": "CCC....CCC"
                           }
                        ]
                     }
                  }
               },
               "default": {
                  "description": "An unexpected error occurred"
               }
            },
            "parameters": [
               {
                  "name": "marker",
                  "in": "query",
                  "description": "The UUID of the resource to start the collection from.",
                  "type": "string",
                  "format": "uuid"
               },
               {
                  "name": "limit",
                  "in": "query",
                  "description": "Maximum number of resources to return in a single result",
                  "type": "integer"
               },
               {
                  "name": "sortKey",
                  "in": "query",
                  "description": "Column to sort results by",
                  "type": "string",
                  "default": "id"
               },
               {
                  "name": "sortDir",
                  "in": "query",
                  "description": "The direction to sort",
                  "type": "string",
                  "enum": [
                     "asc",
                     "desc"
                  ],
                  "default": "asc"
               }
            ]
         },
         "post": {
            "description": "Create a new KeyPair",
            "responses": {
               "201": {
                  "description": "Indicates a successful creation",
                  "schema": {
                     "type": "object",
                     "description": "Represents an existing keypair",
                     "properties": {
                        "uuid": {
                           "type": "string",
                           "description": "Unique UUID for this container",
                           "format": "uuid"
                        },
                        "name": {
                           "description": "Name of this container",
                           "type": "string",
                           "minLength": 1,
                           "maxLength": 255
                        },
                        "bay_uuid": {
                           "type": "string",
                           "description": "Unique UUID of the bay this runs on",
                           "format": "uuid"
                        },
                        "ca_cert": {
                           "description": "The CA certificate",
                           "type": "string",
                           "minLength": 1
                        },
                        "certificate": {
                           "description": "The certificate",
                           "type": "string",
                           "minLength": 1
                        },
                        "private_key": {
                           "description": "The private key",
                           "type": "string",
                           "minLength": 1
                        },
                        "links": {
                           "description": "A list containing a self link and associated baymodel links",
                           "type": "array",
                           "items": {
                              "type": "object",
                              "properties": {
                                 "href": {
                                    "type": "string",
                                    "description": "The url of a link."
                                 },
                                 "rel": {
                                    "type": "string",
                                    "description": "The name of a link."
                                 },
                                 "type": {
                                    "type": "string",
                                    "description": "Indicates the type of document/link."
                                 }
                              }
                           }
                        },
                        "created_at": {
                           "description": "The date and time when the entity was created",
                           "type": "string",
                           "format": "datetime"
                        },
                        "updated_at": {
                           "description": "The date and time when the entity was last updated",
                           "type": "string",
                           "format": "datetime"
                        }
                     }
                  }
               },
               "400": {
                  "description": "The request contained a malformed JSON body"
               },
               "404": {
                  "description": "Entity was not found"
               },
               "409": {
                  "description": "A conflict occurred. This is usually because you specified a name that is set for multiple entities."
               },
               "default": {
                  "description": "An unexpected error occurred"
               }
            },
            "parameters": [
               {
                  "name": "json",
                  "in": "body",
                  "required": true,
                  "schema": {
                     "type": "object",
                     "description": "Represents a new keypair that will be created",
                     "properties": {
                        "name": {
                           "description": "Name of this container",
                           "type": "string",
                           "minLength": 1,
                           "maxLength": 255
                        },
                        "bay_uuid": {
                           "type": "string",
                           "description": "Unique UUID of the bay this runs on",
                           "format": "uuid"
                        },
                        "ca_cert": {
                           "description": "The CA certificate",
                           "type": "string",
                           "minLength": 1
                        },
                        "certificate": {
                           "description": "The certificate",
                           "type": "string",
                           "minLength": 1
                        },
                        "private_key": {
                           "description": "The private key",
                           "type": "string",
                           "minLength": 1
                        }
                     }
                  }
               }
            ]
         }
      },
      "/x509keypairs/detail": {
         "get": {
            "description": "Retrieve a list of keypairs with detailed information",
            "responses": {
               "200": {
                  "description": "A detailed collection of KeyPairs",
                  "schema": {
                     "type": "array",
                     "items": {
                        "type": "object",
                        "description": "Represents an existing keypair",
                        "properties": {
                           "uuid": {
                              "type": "string",
                              "description": "Unique UUID for this container",
                              "format": "uuid"
                           },
                           "name": {
                              "description": "Name of this container",
                              "type": "string",
                              "minLength": 1,
                              "maxLength": 255
                           },
                           "bay_uuid": {
                              "type": "string",
                              "description": "Unique UUID of the bay this runs on",
                              "format": "uuid"
                           },
                           "ca_cert": {
                              "description": "The CA certificate",
                              "type": "string",
                              "minLength": 1
                           },
                           "certificate": {
                              "description": "The certificate",
                              "type": "string",
                              "minLength": 1
                           },
                           "private_key": {
                              "description": "The private key",
                              "type": "string",
                              "minLength": 1
                           },
                           "links": {
                              "description": "A list containing a self link and associated baymodel links",
                              "type": "array",
                              "items": {
                                 "type": "object",
                                 "properties": {
                                    "href": {
                                       "type": "string",
                                       "description": "The url of a link."
                                    },
                                    "rel": {
                                       "type": "string",
                                       "description": "The name of a link."
                                    },
                                    "type": {
                                       "type": "string",
                                       "description": "Indicates the type of document/link."
                                    }
                                 }
                              }
                           },
                           "created_at": {
                              "description": "The date and time when the entity was created",
                              "type": "string",
                              "format": "datetime"
                           },
                           "updated_at": {
                              "description": "The date and time when the entity was last updated",
                              "type": "string",
                              "format": "datetime"
                           }
                        }
                     }
                  },
                  "examples": {
                     "application/json": {
                        "keypairs": [
                           {
                              "uuid": "27e3153e-d5bf-4b7e-b517-fb518e17f34c",
                              "name": "example",
                              "created_at": "2015-09-04 10:44:40.885958",
                              "updated_at": "2015-09-04 10:44:40.885958"
                           }
                        ]
                     }
                  }
               },
               "404": {
                  "description": "Entity was not found"
               },
               "409": {
                  "description": "A conflict occurred. This is usually because you specified a name that is set for multiple entities."
               },
               "default": {
                  "description": "An unexpected error occurred"
               }
            },
            "parameters": [
               {
                  "name": "keypair_uuid",
                  "in": "query",
                  "description": "Allows filtering the collection according to UUID",
                  "type": "string",
                  "format": "uuid"
               },
               {
                  "name": "marker",
                  "in": "query",
                  "description": "The UUID of the resource to start the collection from.",
                  "type": "string",
                  "format": "uuid"
               },
               {
                  "name": "limit",
                  "in": "query",
                  "description": "Maximum number of resources to return in a single result",
                  "type": "integer"
               },
               {
                  "name": "sortKey",
                  "in": "query",
                  "description": "Column to sort results by",
                  "type": "string",
                  "default": "id"
               },
               {
                  "name": "sortDir",
                  "in": "query",
                  "description": "The direction to sort",
                  "type": "string",
                  "enum": [
                     "asc",
                     "desc"
                  ],
                  "default": "asc"
               }
            ]
         }
      },
      "/x509keypairs/{identifier}": {
         "parameters": [
            {
               "name": "identifier",
               "description": "UUID or logical name of the KeyPair.",
               "in": "path",
               "required": true,
               "type": "string"
            }
         ],
         "get": {
            "description": "Retrieve information about the given KeyPair.",
            "responses": {
               "200": {
                  "description": "A representation of the KeyPair",
                  "schema": {
                     "type": "object",
                     "description": "Represents an existing keypair",
                     "properties": {
                        "uuid": {
                           "type": "string",
                           "description": "Unique UUID for this container",
                           "format": "uuid"
                        },
                        "name": {
                           "description": "Name of this container",
                           "type": "string",
                           "minLength": 1,
                           "maxLength": 255
                        },
                        "bay_uuid": {
                           "type": "string",
                           "description": "Unique UUID of the bay this runs on",
                           "format": "uuid"
                        },
                        "ca_cert": {
                           "description": "The CA certificate",
                           "type": "string",
                           "minLength": 1
                        },
                        "certificate": {
                           "description": "The certificate",
                           "type": "string",
                           "minLength": 1
                        },
                        "private_key": {
                           "description": "The private key",
                           "type": "string",
                           "minLength": 1
                        },
                        "links": {
                           "description": "A list containing a self link and associated baymodel links",
                           "type": "array",
                           "items": {
                              "type": "object",
                              "properties": {
                                 "href": {
                                    "type": "string",
                                    "description": "The url of a link."
                                 },
                                 "rel": {
                                    "type": "string",
                                    "description": "The name of a link."
                                 },
                                 "type": {
                                    "type": "string",
                                    "description": "Indicates the type of document/link."
                                 }
                              }
                           }
                        },
                        "created_at": {
                           "description": "The date and time when the entity was created",
                           "type": "string",
                           "format": "datetime"
                        },
                        "updated_at": {
                           "description": "The date and time when the entity was last updated",
                           "type": "string",
                           "format": "datetime"
                        }
                     }
                  },
                  "examples": {
                     "application/json": {
                        "uuid": "27e3153e-d5bf-4b7e-b517-fb518e17f34c",
                        "name": "example",
                        "bay_uuid": "7ae81bb3-dec3-4289-8d6c-da80bd8001ae",
                        "ca_cert": "AAA....AAA",
                        "certificate": "BBB....BBB",
                        "private_key": "CCC....CCC",
                        "created_at": "2015-09-04 10:44:40.885958",
                        "updated_at": "2015-09-04 10:44:40.885958"
                     }
                  }
               },
               "404": {
                  "description": "Entity was not found"
               },
               "409": {
                  "description": "A conflict occurred. This is usually because you specified a name that is set for multiple entities."
               }
            }
         },
         "delete": {
            "description": "Permanently deletes a given KeyPair",
            "responses": {
               "204": {
                  "description": "The request was accepted for processing"
               },
               "404": {
                  "description": "Entity was not found"
               },
               "default": {
                  "description": "An unexpected error occurred"
               }
            }
         }
      }
   }
}
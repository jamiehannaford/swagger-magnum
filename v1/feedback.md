### Node models

- No descs for `http_proxy` and `https_proxy` fields. [Bug report](https://bugs.launchpad.net/magnum/+bug/1533142).
- Why a comma-separated string for `no_proxy` field? Surely an array of strings would be better? [Bug report](https://bugs.launchpad.net/magnum/+bug/1533145).

### Nodes

- Desc for `baymodel_id` ends with "UUID or id". [Bug report](https://bugs.launchpad.net/magnum/+bug/1533146)
- Desc for `node_count` ends with "Set to 1 for no master_count". [Bug report](https://bugs.launchpad.net/magnum/+bug/1533148)
- Timeout is usually measured in seconds, not minutes... 
- `status` field: can it be made an enum? [Bug report](https://bugs.launchpad.net/magnum/+bug/1533149)
- `status_reason` more explanation needed. 

### Containers

- What is the response structure for the actions?
- Each action op lacks a desc
- Inconsistency in field names between `*_id` and `*_uuid` (bays/baymodels)

### Keypairs

- The `ca_cert`, `private_key`, `certificate` field descs are not helpful at all

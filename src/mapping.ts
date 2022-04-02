import { BigInt } from "@graphprotocol/graph-ts"
import {
  gem_graph,
  OrderApprovedPartOne,
  OrderApprovedPartTwo,
  OrderCancelled,
  OrdersMatched,
  NonceIncremented,
  OwnershipRenounced,
  OwnershipTransferred
} from "../generated/gem_graph/gem_graph"
import { Cancel } from "../generated/schema"

export function handleOrderApprovedPartOne(event: OrderApprovedPartOne): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  // let entity = ExampleEntity.load(event.transaction.from.toHex())

  // // Entities only exist after they have been saved to the store;
  // // `null` checks allow to create entities on demand
  // if (!entity) {
  //   entity = new ExampleEntity(event.transaction.from.toHex())

  //   // Entity fields can be set using simple assignments
  //   entity.count = BigInt.fromI32(0)
  // }

  // // BigInt and BigDecimal math are supported
  // entity.count = entity.count + BigInt.fromI32(1)

  // // Entity fields can be set based on event parameters
  // entity.hash = event.params.hash
  // entity.exchange = event.params.exchange

  // // Entities can be written to the store with `.save()`
  // entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.name(...)
  // - contract.tokenTransferProxy(...)
  // - contract.staticCall(...)
  // - contract.guardedArrayReplace(...)
  // - contract.minimumTakerProtocolFee(...)
  // - contract.codename(...)
  // - contract.DOMAIN_SEPARATOR(...)
  // - contract.calculateCurrentPrice_(...)
  // - contract.version(...)
  // - contract.orderCalldataCanMatch(...)
  // - contract.validateOrder_(...)
  // - contract.calculateFinalPrice(...)
  // - contract.protocolFeeRecipient(...)
  // - contract.hashOrder_(...)
  // - contract.ordersCanMatch_(...)
  // - contract.registry(...)
  // - contract.minimumMakerProtocolFee(...)
  // - contract.hashToSign_(...)
  // - contract.nonces(...)
  // - contract.cancelledOrFinalized(...)
  // - contract.owner(...)
  // - contract.exchangeToken(...)
  // - contract.validateOrderParameters_(...)
  // - contract.INVERSE_BASIS_POINT(...)
  // - contract.calculateMatchPrice_(...)
  // - contract.approvedOrders(...)
}


export function handleOrderCancelled(event: OrderCancelled): void {
  let id = event.params.hash.toString();
  let cancel = Cancel.load(id);
  cancel.id = OrderCancelled.





  // cancel.save()
}

export function handleOrdersMatched(event: OrdersMatched): void {

  let id = event.params.id.toString();
  let cancel = Cancel.load(id);
  match.id = OrdersMatched.
  
}



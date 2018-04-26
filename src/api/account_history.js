import { Name, Number, String } from '../schema';

export default {
  get_transactions: {
    params: {
      account_name: Name.required(),
      skip_seq: Number.min(0),
      num_seq: Number
    }
  },
  get_transaction: {
    params: {
      transaction_id: String.required()
    }
  }
};

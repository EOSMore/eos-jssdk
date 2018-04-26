import { Name, Number, String, PublicKey } from '../schema';

export default {
  get_controlled_accounts: {
    params: {
      controlling_account: Name.required()
    }
  },
  get_key_accounts: {
    params: {
      public_key: PublicKey.required()
    }
  },
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

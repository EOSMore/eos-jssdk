import { Name, String, BlockIdOrNum, Boolean, Number } from '../schema';

export default {
  get_account: {
    params: {
      account_name: Name.required()
    }
  },
  get_block: {
    params: {
      block_num_or_id: BlockIdOrNum.required()
    }
  },
  get_code: {
    params: {
      account_name: Name.required()
    }
  },
  get_currency_stats: {
    params: {
      code: Name.required(),
      symbol: String.required()
    }
  },
  get_currency_balance: {
    params: {
      code: Name.required(),
      account: Name.required(),
      symbol: String
    }
  },
  get_info: {

  },
  get_table_rows: {
    params: {
      code: Name.required(),
      scope: Name.required(),
      table: Name.required(),
      limit: {
        type: Number,
        default: 10
      },
      json: {
        type: Boolean,
        default: true
      }
    }
  }
};
